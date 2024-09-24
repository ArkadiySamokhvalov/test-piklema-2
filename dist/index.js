var Status;
(function (Status) {
    Status["available"] = "available";
    Status["pending"] = "pending";
    Status["sold"] = "sold";
})(Status || (Status = {}));
const api = "https://petstore3.swagger.io/api/v3";
const request = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
};
const getPetsByStatus = async (status) => {
    const response = await request(`${api}/pet/findByStatus?status=${status}`);
    return response;
};
const log = async () => {
    console.log(await getPetsByStatus(Status.available));
};
log();
