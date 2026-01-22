import axios from "axios";

export const fetchTransactions = async () => {
    try {
        const response = await axios.get(
            "https://fakerapi.it/api/v1/custom?_quantity=50&id=uuid&type=boolean&amount=number&nav=boolean"
        );
        // console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching transactions:", error);
        return [];
    }
};
