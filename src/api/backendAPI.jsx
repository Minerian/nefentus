
export default class backendAPI {
    constructor() {
        this.baseURL = "http://localhost:8080/api";
        this.token = localStorage.getItem("token");
    }

    async register(formData) {
        const url = `${this.baseURL}/auth/register`;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify(formData),
        };
        const response = await fetch(url, options);
        return response;
    }

    async signout() {
        const url = `${this.baseURL}/auth/signout`;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`,
            },
        };
        const response = await fetch(url, options);
        const data = await response.json();
        localStorage.clear();
        return data;
    }

    async login(username, password) {
        const url = `${this.baseURL}/auth/login`;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: username, password }),
        };
        const response = await fetch(url, options);
        const data = await response.json();
        localStorage.setItem("token", data.jwtToken);
        localStorage.setItem("email", data.email);
        localStorage.setItem("affiliateLink", data.affiliateLink);
        return data;
    }

    async activateAccount(token) {
        const url = `${this.baseURL}/auth/activate`;
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: token,
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }


    async checkPermissionAff() {

        if (!this.token) {
            // Der Benutzer ist nicht angemeldet
            return false;
        }

        const url = `${this.baseURL}/dashboard/affiliate`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`,
            },
        };

        const response = await fetch(url, options);
        return response.ok;
    }


    async checkPermissionAdmin() {
        if (!this.token) {
            // Der Benutzer ist nicht angemeldet
            return false;
        }

        const url = `${this.baseURL}/dashboard/admin`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`,
            },
        };

        const response = await fetch(url, options);
        return response.ok;
    }

    async getAdminDashboardTotalStats() {
        const url = `${this.baseURL}/dashboard/admin/data`;
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`,
            }
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }

    async getAffiliateDashboardTotalStats() {
        const url = `${this.baseURL}/dashboard/affiliate/data`;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`,
            },
            body: localStorage.getItem("affiliateLink"),
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }

    async countAffiliate(affiliate) {
        const url = `${this.baseURL}/dashboard/affiliate/count`;
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: affiliate,
        };
        const response = await fetch(url, options);
        const data = await response.json();
        return data;
    }
}
