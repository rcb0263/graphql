export const schema = `#graphql
type Dinosaur {
  id: ID!
  name: String!
  type: String!
}
type Estudiante {
  id: ID!
  name: String!
  email: String!
  enrolledCourses: String[]
}

type Profesor {
  id: ID!
  name: String!
  type: String!
}

type Query {
  dinosaurs: [Dinosaur!]!
  dinosaur(id: ID!): Dinosaur
}

type Mutation {
  addDinosaur(name: String!, type: String!): Dinosaur!
  deleteDinosaur(id: ID!): Dinosaur
}
`;