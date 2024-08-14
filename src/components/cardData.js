
const apiKey = "live_3g2CrJqQXf5coPjqmOHKnwsEyM9PcIHXKUHxGnujfvNTIQzhoENsR1HID2Q5CKkL"

export default async function getCats() {

  try {
    const src = `https://api.thecatapi.com/v1/images/search?limit=10`;
    const requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
    };

    const response = await fetch(src, requestOptions);
    const catData = await response.json();

    return catData;

  } catch (error) {
    console.log(error)
  }
}


const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": apiKey
});


