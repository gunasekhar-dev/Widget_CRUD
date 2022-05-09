import { ComponentWidget } from "./componentWidget.model";

export interface Widget {
  id: string;
  name: string;
  description: string;
  components: ComponentWidget[];
  count: number;

}
