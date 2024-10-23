import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({ children, params: { locale } }) {
  const messages = await getMessages();
  return (
    <>
      {/* NextIntl​​ClientProvider 会自动从 i18n/request.ts 继承配置，但messages需要显式传递 */}
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  );
}
