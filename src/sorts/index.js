import bubble_sort, { data as bubble_data } from './bubble';
import insertion_sort, { data as insertion_data } from './insertion';
import merge_sort, { data as merge_data } from './merge';
import radix_sort, { data as radix_data } from './radix';

export default {
  [bubble_data.slug]: { sort: bubble_sort, data: bubble_data },
  [insertion_data.slug]: { sort: insertion_sort, data: insertion_data },
  [merge_data.slug]: { sort: merge_sort, data: merge_data },
  [radix_data.slug]: { sort: radix_sort, data: radix_data },
};
