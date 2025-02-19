
const Home = () => {

    const API_URL = "https://opentdb.com/api.php?amount=50&type=multiple";
    // const API_URL = "https://eaxeli.com/api/v1/questions/quiz";
    // console.log(API_URL);

    let responseJson;

    let getQuestions = async () => {
        // try{
            let response = await fetch(API_URL);
            console.log(response);
            responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
            // } catch (error) {
                // throw error;
            // }
    }
    
    console.log(responseJson);

    let array = responseJson.questions;
    for(let i = 0; i < array.length; i++){
        console.log(array[i].question);
    }

    console.log(getQuestions());

    return(
        <div>
            <h1> Home </h1>             
            {/* <p>{array[i].question}</p> */}
        </div>
    )
}

export default Home;