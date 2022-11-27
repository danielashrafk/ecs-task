import * as _ from "lodash";
import { Meal, MealInput, WeekDays } from "../graphql/generated";
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

export const getUniqueDays = (data: Array<Partial<Meal>>) => {
  let uniqueDays = _.uniq(_.map(data, "day"));
  let returnedArr: string[] = [];
  for (let i = 0; i < days.length; i++) {
    if (_.includes(uniqueDays, days[i])) returnedArr.push(days[i]);
  }
  return returnedArr as Array<string>;
};

export const partitionMeals = (data: Array<Partial<Meal>>) => {
  const uniqueDays = getUniqueDays(data);
  let returnedArr: [{ day: string; meals: [{ id: string; meal: string }] }] = [
    { day: "", meals: [{ id: "", meal: "" }] },
  ];
  for (let i = 0; i < uniqueDays.length; i++) {
    let filteredMeals = _.map(_.filter(data, { day: uniqueDays[i] }), "meal");

    let filteredIds = _.uniq(
      _.map(_.filter(data, { day: uniqueDays[i] }), "id")
    );

    let mealsArr = [];
    for (let j = 0; j < filteredIds.length; j++) {
      mealsArr.push({ id: filteredIds[j], meal: filteredMeals[j] });
    }
    returnedArr[i] = {
      day: uniqueDays[i],
      meals: mealsArr as [{ id: ""; meal: "" }],
    };
  }

  // console.log(returnedArr);
  return returnedArr as Partial<Meal>[];
};

export const findMeals = (data: any, day: WeekDays) => {
  const meals = _.find(data, { day: day });
  let returnedArr = [];
  for (let i = 0; i < meals?.["meals"].length; i++) {
    // returnedArr.push({
    //   id: meals?.["meals"][i]["id"],
    //   meal: meals?.["meals"][i]["meal"],
    // });
    returnedArr.push(meals?.["meals"][i]["meal"]);
  }
  // console.log(returnedArr);
  return returnedArr as any;
};

export const addId = (data: any, day: WeekDays, index: number) => {
  const meals = _.find(data, { day: day });
  // console.log(returnedArr);
  return meals["meals"][index]["id"];
};

// export const addMeal = (
//   meal: string,
//   day: WeekDays,
//   data: Array<Partial<Meal>>
// ) => {
//   let returnedArr = [...data];
//   for (let i = 0; i < returnedArr.length; i++) {
//     if (_.isEqual(returnedArr[i]["day"], day)) {
//       returnedArr[i]["meal"] = meal;
//       return returnedArr;
//     }
//   }
//   returnedArr.push({ day: day, meal: meal });
//   return returnedArr;
// };

export const addMeal = (id: string, data: MealInput[]) => {
  let returnedArr = [...data];

  returnedArr.push({ id: id });
  return returnedArr as MealInput[];
};
