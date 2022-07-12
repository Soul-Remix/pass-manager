import { Dispatch, SetStateAction } from "react";
import IPasswordApiResponse from "../../types/passwordApiResponse";
import Button from "../Button/Button";

interface IProps extends IPasswordApiResponse {
  setData: Dispatch<SetStateAction<IPasswordApiResponse | null>>;
}

const PasswordResult = ({
  score,
  calc_time,
  crack_times_display,
  crack_times_seconds,
  feedback,
  guesses,
  password,
  guesses_log10,
  setData,
}: IProps) => {
  const { scoreColor, scoreMessage } = passwordScore(score);

  return (
    <div className="text-lg flex items-center flex-col flex-wrap">
      <div>
        <h2 className="text-2xl text-blue-400">Results:</h2>
        <p>
          Password: <p className={`inline ${scoreColor} ml-2`}>{password}</p>
        </p>
        <p>
          Password score: <p className={`inline ${scoreColor} ml-2`}>{score}</p>
        </p>
        <p>{scoreMessage}</p>
        <h2 className="text-2xl text-blue-400 mt-4">Time to crack:</h2>
        <div>
          {/* <p>
            Offline fast hashing:
            <p className="inline ml-2">
              {crack_times_display.offline_fast_hashing_1e10_per_second}
            </p>
          </p> */}
          <p>
            Offline slow hashing:
            <p className="inline ml-2">
              {crack_times_display.offline_slow_hashing_1e4_per_second}
            </p>
          </p>
          <p>
            Online no throttling:
            <p className="inline ml-2">
              {crack_times_display.online_no_throttling_10_per_second}
            </p>
          </p>
          <p>
            Online throttling:
            <p className="inline ml-2">
              {crack_times_display.online_throttling_100_per_hour}
            </p>
          </p>
          <p>
            Number of guesses log10: <p className="inline ml-2">{guesses}</p>
          </p>
          <p>
            Number of guesses log10:
            <p className="inline ml-2">{guesses_log10}</p>
          </p>
          {feedback.warning && (
            <>
              <h2 className="text-2xl text-blue-400 mt-4">Feedback:</h2>
              <p>{feedback.warning}</p>
              <p>{feedback.suggestions[0]}</p>
            </>
          )}
        </div>
      </div>
      <Button onClick={() => setData(null)}>Try another password</Button>
    </div>
  );
};

export default PasswordResult;

function passwordScore(score: number) {
  let scoreColor = "text-main";
  let scoreMessage = "";

  switch (score) {
    case 0:
      scoreColor = "text-red-800";
      scoreMessage = "too guessable";
      break;
    case 1:
      scoreColor = "text-red-600";
      scoreMessage = "very guessable";
      break;
    case 2:
      scoreColor = "text-yellow-800";
      scoreMessage = "somewhat guessable";
      break;
    case 3:
      scoreColor = "text-yellow-600";
      scoreMessage = "safely unguessable";
      break;
    case 4:
      scoreColor = "text-green-500";
      scoreMessage = "very unguessable";
      break;
  }

  return { scoreColor, scoreMessage };
}
