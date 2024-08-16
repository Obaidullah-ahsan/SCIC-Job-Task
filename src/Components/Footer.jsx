const Footer = () => {
  return (
    <div>
      <footer className="px-4 py-6 bg-slate-200 dark:text-gray-600">
        <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-bold pl-4">UrbanCart</h2>
          </div>
          <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
            <li>
              <a>
                Instagram
              </a>
            </li>
            <li>
              <a>
                Facebook
              </a>
            </li>
            <li>
              <a>
                Twitter
              </a>
            </li>
          </ul>
        </div>
        <div className="py-4 text-sm text-center dark:text-gray-600">
          © 1968 Company Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
