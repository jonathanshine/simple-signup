const serverURL = "http://localhost:5000";


export const SignUpUser = async (data) => {
    try {
        const result = await( await fetch(`${serverURL}/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( data )
        })).json();

        return result;
    } catch (error) {
        return error;
    };
};

export const getAllUsers = async () => {
    try {
        const data = await( await fetch(`${serverURL}/users`)).json();
        return data;
    } catch (error) {
        return error;
    };
};