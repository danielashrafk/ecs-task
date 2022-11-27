
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum UserRole {
    GUEST = "GUEST",
    ADMIN = "ADMIN"
}

export enum WeekDays {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday"
}

export interface MealInput {
    id: string;
}

export interface User {
    id: string;
    email: string;
    role: UserRole;
    firstName: string;
    lastName: string;
    meals: Nullable<MealAssignment>[];
}

export interface Meal {
    id: string;
    day: WeekDays;
    meal: string;
    users: Nullable<MealAssignment>[];
}

export interface MealAssignment {
    userId: string;
    mealId: string;
    user?: Nullable<User>;
    meal?: Nullable<Meal>;
}

export interface IQuery {
    getAllUsers(): Nullable<User>[] | Promise<Nullable<User>[]>;
    getUser(id: string): User | Promise<User>;
    getAllMeals(): Nullable<Meal>[] | Promise<Nullable<Meal>[]>;
    getMeal(day: WeekDays): Nullable<Meal>[] | Promise<Nullable<Meal>[]>;
    getAllMealAssignments(): Nullable<MealAssignment>[] | Promise<Nullable<MealAssignment>[]>;
    getMealAssignment(userId: string, mealId: string): MealAssignment | Promise<MealAssignment>;
}

export interface IMutation {
    addUser(email: string, firstName: string, lastName: string, role: UserRole): User | Promise<User>;
    addMeal(day: WeekDays, meal: string): Meal | Promise<Meal>;
    addMealAssignment(userId: string, meals: Nullable<MealInput>[]): Nullable<MealAssignment>[] | Promise<Nullable<MealAssignment>[]>;
}

type Nullable<T> = T | null;
