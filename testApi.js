import { fetchTransactions } from "./src/api/mockApi.js";

const test = async () => {
    console.log("Fetching...");
    const data = await fetchTransactions();
    console.log("Data type:", typeof data);
    console.log("Is Array:", Array.isArray(data));
    console.log("Length:", data ? data.length : "N/A");
    if (data && data.length > 0) {
        console.log("First item:", data[0]);
    }
};

test();
