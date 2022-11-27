import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Meal = {
  __typename?: 'Meal';
  day: WeekDays;
  id: Scalars['ID'];
  meal: Scalars['String'];
  users: Array<Maybe<MealAssignment>>;
};

export type MealAssignment = {
  __typename?: 'MealAssignment';
  meal?: Maybe<Meal>;
  mealId: Scalars['ID'];
  user?: Maybe<User>;
  userId: Scalars['ID'];
};

export type MealInput = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMeal: Meal;
  addMealAssignment: Array<Maybe<MealAssignment>>;
  addUser: User;
};


export type MutationAddMealArgs = {
  day: WeekDays;
  meal: Scalars['String'];
};


export type MutationAddMealAssignmentArgs = {
  meals: Array<InputMaybe<MealInput>>;
  userId: Scalars['ID'];
};


export type MutationAddUserArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  role: UserRole;
};

export type Query = {
  __typename?: 'Query';
  getAllMealAssignments: Array<Maybe<MealAssignment>>;
  getAllMeals: Array<Maybe<Meal>>;
  getAllUsers: Array<Maybe<User>>;
  getMeal: Array<Maybe<Meal>>;
  getMealAssignment: MealAssignment;
  getUser: User;
};


export type QueryGetMealArgs = {
  day: WeekDays;
};


export type QueryGetMealAssignmentArgs = {
  mealId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  meals: Array<Maybe<MealAssignment>>;
  role: UserRole;
};

export enum UserRole {
  Admin = 'ADMIN',
  Guest = 'GUEST'
}

export enum WeekDays {
  Monday = 'Monday',
  Sunday = 'Sunday',
  Thursday = 'Thursday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday'
}

export type GetMealsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMealsQuery = { __typename?: 'Query', getAllMeals: Array<{ __typename?: 'Meal', id: string, day: WeekDays, meal: string } | null> };

export type GetMealQueryVariables = Exact<{
  day: WeekDays;
}>;


export type GetMealQuery = { __typename?: 'Query', getMeal: Array<{ __typename?: 'Meal', meal: string } | null> };

export type AddMealMutationVariables = Exact<{
  day: WeekDays;
  meal: Scalars['String'];
}>;


export type AddMealMutation = { __typename?: 'Mutation', addMeal: { __typename?: 'Meal', id: string, day: WeekDays, meal: string } };

export type MealDataFragment = { __typename?: 'Meal', id: string, day: WeekDays, meal: string };

export type AddMealAssignmentMutationVariables = Exact<{
  userId: Scalars['ID'];
  meals: Array<InputMaybe<MealInput>> | InputMaybe<MealInput>;
}>;


export type AddMealAssignmentMutation = { __typename?: 'Mutation', addMealAssignment: Array<{ __typename?: 'MealAssignment', userId: string, mealId: string, user?: { __typename?: 'User', firstName: string, lastName: string } | null, meal?: { __typename?: 'Meal', day: WeekDays, meal: string } | null } | null> };

export type MealAssignmentDataFragment = { __typename?: 'MealAssignment', userId: string, mealId: string, user?: { __typename?: 'User', firstName: string, lastName: string } | null, meal?: { __typename?: 'Meal', day: WeekDays, meal: string } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'User', id: string, email: string, role: UserRole } | null> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', id: string, email: string, role: UserRole } };

export type AddUserMutationVariables = Exact<{
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  role: UserRole;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser: { __typename?: 'User', id: string, email: string, role: UserRole } };

export type UserDataFragment = { __typename?: 'User', id: string, email: string, role: UserRole };

export const MealDataFragmentDoc = gql`
    fragment MealData on Meal {
  id
  day
  meal
}
    `;
export const MealAssignmentDataFragmentDoc = gql`
    fragment MealAssignmentData on MealAssignment {
  userId
  mealId
  user {
    firstName
    lastName
  }
  meal {
    day
    meal
  }
}
    `;
export const UserDataFragmentDoc = gql`
    fragment UserData on User {
  id
  email
  role
}
    `;
export const GetMealsDocument = gql`
    query GetMeals {
  getAllMeals {
    ...MealData
  }
}
    ${MealDataFragmentDoc}`;

/**
 * __useGetMealsQuery__
 *
 * To run a query within a React component, call `useGetMealsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMealsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMealsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMealsQuery(baseOptions?: Apollo.QueryHookOptions<GetMealsQuery, GetMealsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMealsQuery, GetMealsQueryVariables>(GetMealsDocument, options);
      }
export function useGetMealsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMealsQuery, GetMealsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMealsQuery, GetMealsQueryVariables>(GetMealsDocument, options);
        }
export type GetMealsQueryHookResult = ReturnType<typeof useGetMealsQuery>;
export type GetMealsLazyQueryHookResult = ReturnType<typeof useGetMealsLazyQuery>;
export type GetMealsQueryResult = Apollo.QueryResult<GetMealsQuery, GetMealsQueryVariables>;
export const GetMealDocument = gql`
    query GetMeal($day: WeekDays!) {
  getMeal(day: $day) {
    meal
  }
}
    `;

/**
 * __useGetMealQuery__
 *
 * To run a query within a React component, call `useGetMealQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMealQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMealQuery({
 *   variables: {
 *      day: // value for 'day'
 *   },
 * });
 */
export function useGetMealQuery(baseOptions: Apollo.QueryHookOptions<GetMealQuery, GetMealQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMealQuery, GetMealQueryVariables>(GetMealDocument, options);
      }
export function useGetMealLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMealQuery, GetMealQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMealQuery, GetMealQueryVariables>(GetMealDocument, options);
        }
export type GetMealQueryHookResult = ReturnType<typeof useGetMealQuery>;
export type GetMealLazyQueryHookResult = ReturnType<typeof useGetMealLazyQuery>;
export type GetMealQueryResult = Apollo.QueryResult<GetMealQuery, GetMealQueryVariables>;
export const AddMealDocument = gql`
    mutation AddMeal($day: WeekDays!, $meal: String!) {
  addMeal(day: $day, meal: $meal) {
    ...MealData
  }
}
    ${MealDataFragmentDoc}`;
export type AddMealMutationFn = Apollo.MutationFunction<AddMealMutation, AddMealMutationVariables>;

/**
 * __useAddMealMutation__
 *
 * To run a mutation, you first call `useAddMealMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMealMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMealMutation, { data, loading, error }] = useAddMealMutation({
 *   variables: {
 *      day: // value for 'day'
 *      meal: // value for 'meal'
 *   },
 * });
 */
export function useAddMealMutation(baseOptions?: Apollo.MutationHookOptions<AddMealMutation, AddMealMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMealMutation, AddMealMutationVariables>(AddMealDocument, options);
      }
export type AddMealMutationHookResult = ReturnType<typeof useAddMealMutation>;
export type AddMealMutationResult = Apollo.MutationResult<AddMealMutation>;
export type AddMealMutationOptions = Apollo.BaseMutationOptions<AddMealMutation, AddMealMutationVariables>;
export const AddMealAssignmentDocument = gql`
    mutation AddMealAssignment($userId: ID!, $meals: [MealInput]!) {
  addMealAssignment(userId: $userId, meals: $meals) {
    ...MealAssignmentData
  }
}
    ${MealAssignmentDataFragmentDoc}`;
export type AddMealAssignmentMutationFn = Apollo.MutationFunction<AddMealAssignmentMutation, AddMealAssignmentMutationVariables>;

/**
 * __useAddMealAssignmentMutation__
 *
 * To run a mutation, you first call `useAddMealAssignmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMealAssignmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMealAssignmentMutation, { data, loading, error }] = useAddMealAssignmentMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      meals: // value for 'meals'
 *   },
 * });
 */
export function useAddMealAssignmentMutation(baseOptions?: Apollo.MutationHookOptions<AddMealAssignmentMutation, AddMealAssignmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMealAssignmentMutation, AddMealAssignmentMutationVariables>(AddMealAssignmentDocument, options);
      }
export type AddMealAssignmentMutationHookResult = ReturnType<typeof useAddMealAssignmentMutation>;
export type AddMealAssignmentMutationResult = Apollo.MutationResult<AddMealAssignmentMutation>;
export type AddMealAssignmentMutationOptions = Apollo.BaseMutationOptions<AddMealAssignmentMutation, AddMealAssignmentMutationVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  getAllUsers {
    ...UserData
  }
}
    ${UserDataFragmentDoc}`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: ID!) {
  getUser(id: $id) {
    ...UserData
  }
}
    ${UserDataFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const AddUserDocument = gql`
    mutation AddUser($email: String!, $firstName: String!, $lastName: String!, $role: UserRole!) {
  addUser(email: $email, firstName: $firstName, lastName: $lastName, role: $role) {
    ...UserData
  }
}
    ${UserDataFragmentDoc}`;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export type MealKeySpecifier = ('day' | 'id' | 'meal' | 'users' | MealKeySpecifier)[];
export type MealFieldPolicy = {
	day?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	meal?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MealAssignmentKeySpecifier = ('meal' | 'mealId' | 'user' | 'userId' | MealAssignmentKeySpecifier)[];
export type MealAssignmentFieldPolicy = {
	meal?: FieldPolicy<any> | FieldReadFunction<any>,
	mealId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addMeal' | 'addMealAssignment' | 'addUser' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addMeal?: FieldPolicy<any> | FieldReadFunction<any>,
	addMealAssignment?: FieldPolicy<any> | FieldReadFunction<any>,
	addUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('getAllMealAssignments' | 'getAllMeals' | 'getAllUsers' | 'getMeal' | 'getMealAssignment' | 'getUser' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	getAllMealAssignments?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllMeals?: FieldPolicy<any> | FieldReadFunction<any>,
	getAllUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	getMeal?: FieldPolicy<any> | FieldReadFunction<any>,
	getMealAssignment?: FieldPolicy<any> | FieldReadFunction<any>,
	getUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('email' | 'firstName' | 'id' | 'lastName' | 'meals' | 'role' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	meals?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Meal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MealKeySpecifier | (() => undefined | MealKeySpecifier),
		fields?: MealFieldPolicy,
	},
	MealAssignment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MealAssignmentKeySpecifier | (() => undefined | MealAssignmentKeySpecifier),
		fields?: MealAssignmentFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;