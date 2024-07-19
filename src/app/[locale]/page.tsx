import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function IndexPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");

  return <main></main>;
}
