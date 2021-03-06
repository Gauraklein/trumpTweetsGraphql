import { Cat } from "./models/Cat"


export const resolvers = {
    Query: {
        hello: () => "howdy",
        cats: () => Cat.find()
    },
    Mutation: {
        createCat: async (_, { name }) => {
            const kitty = new Cat({ name });
            await kitty.save()
            console.log(kitty.name)
            return kitty;
        }
    }
}