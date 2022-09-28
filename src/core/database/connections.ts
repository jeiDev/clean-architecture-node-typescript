import { createDataSourceConnections } from "@database/__utils/connections/typeorm";

export default async () => {
    await createDataSourceConnections();
}