export interface TFilterItem {
  label: string;
  name: string;
}

export interface TFilterProps {
  filters: TFilterItem[];
  handleSelect?: (filter: TFilterItem) => void;
}
