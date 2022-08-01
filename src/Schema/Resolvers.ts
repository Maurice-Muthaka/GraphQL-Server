const axios = require("axios");

interface Request {
    search: string;
    page: number;

}

const resolvers = {
    Query: {
        people: async (parents:any, args: Request) => {
            const { search, page } = args;
            const { data } = await axios.get(`https://swapi.dev/api/people/?search=${search}&page=${page}`);
            return data.results
        }
    }
}

export { resolvers }