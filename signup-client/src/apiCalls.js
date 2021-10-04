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