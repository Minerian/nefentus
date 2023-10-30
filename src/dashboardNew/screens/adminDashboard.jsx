import { useContext, useEffect, useState } from "react";
import AdminBody from "../components/adminBody/adminBody";
import EarningCards from "../components/earningCards/earningCards";
import Table from "../components/table/table";
import TableAction from "../components/tableAction/tableAction";
import TableSearch from "../components/tableSearch/tableSearch";
import TableStatus from "../components/tableStatus/tableStatus";
import adminDashboardApi from "../../api/adminDashboardApi";
import { formatUSDBalance } from "../../utils";
import moment from "moment";

import { MessageContext } from "../../context/message";
import { useNavigate } from "react-router-dom";
import { ROLE_TO_NAME } from "../../constants";

const label = [
  "Name",
  "Roles",
  "Email",
  "Status",
  "Incomes",
  "Join on",
  "Earnings",
  "Action",
];

const roleColors = {
  vendor: "#107CDF",
  affiliate: "#F5B51B",
  broker: "#23C215",
  seniorbroker: "#AF26E7",
  leader: "#1595c2",
  admin: "#808080",
};

const labels = ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "00:00"];

const chartData = {
  labels,
  datasets: [
    {
      label: "Last 24h",
      data: [1, 2, 3, 4, 5, 6, 7],
      borderColor: "#0784B5",
      backgroundColor: "#0784B5",
    },
    {
      label: "Previous 24h",
      data: [12, 18, 9, 5, 3, 15, 20],
      borderColor: "rgba(255, 255, 255,0.2)",
      backgroundColor: "rgba(255, 255, 255,0.2)",
    },
  ],
};

const AdminDashboard = ({ type }) => {
  const [cardInfo, setCardInfo] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [barContent, setBarContent] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [isReloadData, setIsReloadData] = useState(false);
  const [totalRegUserCnt, setTotalRegUserCnt] = useState(0);

  const { setInfoMessage, setErrorMessage, clearMessages } =
    useContext(MessageContext);

  const navigate = useNavigate();
  const adminApi = new adminDashboardApi(type);
  const affiliate = type === "affiliate";

  useEffect(() => {
    fetchAdminData();
    clearMessages();
  }, [isReloadData]);

  const fetchAdminData = async () => {
    const result = await adminApi.checkPermission();
    if (result !== true) {
      navigate("/login");
    } else {
      const getPromises = [
        adminApi.getTotalRegistrations(),
        adminApi.getTotalClicks(),
        adminApi.getNumOrders(),
        adminApi.getTotalIncome(),
        adminApi.getUsers(),
        adminApi.getRoleReport(),
        adminApi.getTotalIncomesPerDay(),
      ];

      const [
        dataReg,
        dataClick,
        dataOrders,
        dataInc,
        dataUsers,
        reportResp,
        totalPricePerDate,
      ] = await Promise.allSettled(getPromises);

      console.log(
        dataReg,
        dataClick,
        dataOrders,
        dataInc,
        dataUsers,
        reportResp,
        totalPricePerDate,
      );

      const cardsContent = [
        {
          title: "Total Income",
          amount: `${parseFloat(dataInc?.value?.number).toFixed(2)}$`,
          percentage: dataInc?.value?.percentage,
          isMonetary: true,
        },
        {
          title: "Clicks",
          amount: dataClick?.value?.number,
          percentage: dataClick?.value?.percentage,
          isMonetary: false,
        },
        {
          title: "Registrations",
          amount: dataReg?.value?.number,
          percentage: dataReg?.value?.percentage,
          isMonetary: false,
        },
      ];
      if (
        type === "admin" ||
        type === "leader" ||
        type === "seniorbroker" ||
        type === "broker"
      ) {
        cardsContent[1] = {
          title: "Orders",
          amount: dataOrders?.value?.number,
          percentage: dataOrders?.value?.percentage,
          isMonetary: false,
        };
      }

      let total = 0;
      const regRoleGraphData = reportResp.value.map((item) => {
        total = total + item.count;

        return {
          color: roleColors[item.role],
          legend: ROLE_TO_NAME[item.role],
          num: item.count,
          percentage: item.percentage,
        };
      });

      setTotalRegUserCnt(total);

      setCardInfo(cardsContent);

      setBarContent(regRoleGraphData);

      dataUsers.value.reverse();
      updateUsers(dataUsers.value);

      setGraphData(totalPricePerDate.value);
    }
  };

  const updateStatusUser = async (userEmail, activated) => {
    let resp;
    if (activated) resp = await adminApi.deactivateUser(userEmail);
    else resp = await adminApi.patchStatus(userEmail);
    if (resp) {
      updateUsersTable();
    }
  };

  const updateUsersTable = async () => {
    const newUserData = await adminApi.getUsers();
    newUserData.reverse();
    updateUsers(newUserData);
  };

  function updateUsers(dataUsers) {
    if (dataUsers) {
      const newDataUsers = dataUsers.map((user) => [
        `${user.firstName} ${user.lastName}`,
        user.roles
          .map((role) => ROLE_TO_NAME[role.replace(" ", "")])
          .join(", "),
        user.email,
        user.activated ? (
          <TableStatus color="green">Enabled</TableStatus>
        ) : (
          <TableStatus color="red">Disabled</TableStatus>
        ),
        formatUSDBalance(user.income),
        moment(user.createdAt).format("MMM D YYY"),
        `$${user.income}`,
        <TableAction
          button={user.activated ? "Disable" : "Enable"}
          onClick={() => updateStatusUser(user.email, user.activated)}
        />,
      ]);

      setTableData(newDataUsers);
    }
  }

  return (
    <div>
      <EarningCards data={cardInfo} />
      <AdminBody
        data={barContent}
        chartData={chartData}
        userCnt={totalRegUserCnt}
        type={type}
        setIsReloadData={setIsReloadData}
      />
      <div>
        <div>
          <TableSearch title="User Management" />
          <Table
            grid="1.3fr 1fr 1.7fr 1fr 1fr 1fr 1fr 1fr"
            label={label}
            data={tableData}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
