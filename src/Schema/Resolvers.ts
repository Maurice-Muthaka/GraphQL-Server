const axios = require("axios");

interface Request {
    search?: string;
    page?: number;

}

const resolvers = {
    Query: {
        people: async (parents:any, args: Request) => {
            const { search, page } = args;
            const { data } = await axios.get(`https://swapi.dev/api/people/?search=${search || ''}&page=${page || ''}`);
            const result = {
                next: data.next,
                previous: data.previous,
                people: data.results
            }
            return result
        },
        person: async (parents:any, args: { id: String }) => {
            const { id } = args;
            const { data } = await axios.get(`https://swapi.dev/api/people/${id}`);
            return data
        }
    }
}

export { resolvers }