export const authConfig = {
  username: process.env.ADMIN_USER ?? "admin",
  password: process.env.ADMIN_PASSWORD ?? "jhonny",
  accessToken: process.env.ADMIN_ACCESS_TOKEN ?? "portfolio-local-access",
};

export const accessCookieName = "portfolio_access";