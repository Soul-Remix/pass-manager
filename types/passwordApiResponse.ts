interface IPasswordApiResponse {
  calc_time: number;
  crack_times_display: {
    offline_fast_hashing_1e10_per_second: string;
    offline_slow_hashing_1e4_per_second: string;
    online_no_throttling_10_per_second: string;
    online_throttling_100_per_hour: string;
  };
  crack_times_seconds: {
    offline_fast_hashing_1e10_per_second: number;
    offline_slow_hashing_1e4_per_second: number;
    online_no_throttling_10_per_second: number;
    online_throttling_100_per_hour: number;
  };
  feedback: {
    warning: string;
    suggestions: Array<string>;
  };
  guesses: number;
  guesses_log10: number;
  score: number;
  message: string;
  password: string;
}

export default IPasswordApiResponse;
