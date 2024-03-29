const Footer = () => {
  return (
    <footer className="flex flex-col justify-center content-center flex-wrap p-4 bg-white dark:bg-navy">
      <a
        href="https://soul-remix.netlify.app/"
        className={textStyle}
        target="_blank"
        rel="noreferrer"
      >
        A soul-remix project
      </a>
      <div className="flex justify-around p-2">
        <a
          href="https://github.com/Soul-Remix"
          target="_blank"
          rel="noreferrer"
        >
          {githubSvg}
        </a>
        <a href="mailto:soulremix-dev@pm.me" target="_blank" rel="noreferrer">
          {emailSvg}
        </a>
      </div>
    </footer>
  );
};

const textStyle =
  "text-lg text-gray-400 hover:text-main dark:hover:text-mainDark transition-all duration-300";

const githubSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className={`h-8 w-8 ${textStyle}`}
    viewBox="0 0 16 16"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const emailSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-8 w-8 ${textStyle}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

export default Footer;
