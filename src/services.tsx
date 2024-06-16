let username = "coalition";
let password = "skills-test";
let auth = btoa(`${username}:${password}`);

/*
Can be modified later as a commong fetch request
 */
const getService = async () => {
  const response = await fetch(
    "https://fedskillstest.coalitiontechnologies.workers.dev",
    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
};

export { getService };
