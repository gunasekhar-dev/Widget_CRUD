import { ComponentWidget } from "./componentWidget.model";

export interface UpdateWidget {
  name: string | undefined;
  description: string | undefined;
  components: ComponentWidget[] | undefined;
  count: number | undefined;
}
