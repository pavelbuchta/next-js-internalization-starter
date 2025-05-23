import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { i18n } from "./config";

export default getRequestConfig(async ({ locale }) => {
  if (!i18n.locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
