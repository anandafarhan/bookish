import {AxiosResponse} from 'axios';
import appClient from 'src/clients/appClient';
import {
  GET_AUTHOR_API,
  GET_BOOK_API,
  GET_SUBJECT_API,
  GET_WORK_API,
} from 'src/constants/api';

//#region =================== Subjects API ===================
interface IGetSubjectParams {
  subject: string;
  limit?: number;
  offset?: number;
}

export interface IGetSubjectsResponse {
  key: string;
  name: string;
  subject_type: string;
  work_count: number;
  works: Work[];
}

export interface Work {
  key: string;
  title: string;
  edition_count: number;
  cover_id: number;
  cover_edition_key: string;
  subject: string[];
  ia_collection: string[];
  lendinglibrary: boolean;
  printdisabled: boolean;
  lending_edition: string;
  lending_identifier: string;
  authors: Author[];
  first_publish_year: number;
  ia: null | string;
  public_scan: boolean;
  has_fulltext: boolean;
  availability?: Availability;
}

export interface Author {
  key: string;
  name: string;
}

export interface Availability {
  status: string;
  available_to_browse?: boolean;
  available_to_borrow?: boolean;
  available_to_waitlist?: boolean;
  is_printdisabled?: boolean;
  is_readable?: boolean;
  is_lendable?: boolean;
  is_previewable?: boolean;
  identifier: string;
  isbn?: null | string;
  oclc?: null;
  openlibrary_work?: string;
  openlibrary_edition?: string;
  last_loan_date?: null | string;
  num_waitlist?: null | string;
  last_waitlist_date?: null | string;
  is_restricted: boolean;
  is_browseable: boolean;
  __src__: Src;
  error_message?: string;
}

export enum Src {
  CoreModelsLendingGetAvailability = 'core.models.lending.get_availability',
}
//#endregion =================== Subjects API ===================

//#region =================== Works API ===================

export interface IGetWorkResponse {
  description: WorkCreated | string;
  title: string;
  covers: number[];
  first_publish_date: string;
  subject_people: string[];
  key: string;
  authors: Author[];
  type: Type;
  subjects: string[];
  latest_revision: number;
  revision: number;
  created: WorkCreated;
  last_modified: WorkCreated;
}

export interface Author {
  type: Type;
  author: Type;
}

export interface Type {
  key: string;
}

export interface WorkCreated {
  type: string;
  value: string;
}

//#endregion =================== Books API ===================

//#region =================== Authors API ===================
export interface IGetAuthorResponse {
  birth_date: string;
  links: Link[];
  bio: Bio;
  source_records: string[];
  remote_ids: RemoteIDS;
  name: string;
  alternate_names: string[];
  photos: number[];
  type: Type;
  key: string;
  personal_name: string;
  death_date: string;
  latest_revision: number;
  revision: number;
  created: Bio;
  last_modified: Bio;
}

export interface Bio {
  type: string;
  value: string;
}

export interface Link {
  url: string;
  title: string;
  type: Type;
}

export interface Type {
  key: string;
}

export interface RemoteIDS {
  viaf: string;
  isni: string;
  wikidata: string;
}
//#endregion =================== Authors API ===================

//#region =================== Editions API ===================

export interface IGetEditionsResponse {
  links: Links;
  size: number;
  entries: Entry[];
}

export interface Entry {
  publishers: string[];
  number_of_pages?: number;
  subtitle?: string;
  weight?: string;
  covers?: number[];
  physical_format?: string;
  last_modified: EditionCreated;
  latest_revision: number;
  key: string;
  contributions: string[];
  subjects?: string[];
  languages: TypeElement[];
  first_sentence?: EditionCreated;
  title: string;
  identifiers?: Identifiers;
  created: EditionCreated;
  isbn_13?: string[];
  isbn_10?: string[];
  publish_date: string;
  works: TypeElement[];
  type: TypeElement;
  physical_dimensions?: string;
  revision: number;
  ia_box_id?: string[];
  series?: string[];
  full_title?: string;
  lc_classifications?: string[];
  authors?: TypeElement[];
  ocaid?: string;
  publish_places?: string[];
  pagination?: string;
  source_records?: string[];
  work_titles?: string[];
  dewey_decimal_class?: string[];
  subject_people?: string[];
  publish_country?: string;
  by_statement?: string;
  oclc_numbers?: string[];
  notes?: EditionCreated;
  table_of_contents?: TableOfContent[];
}

export interface TypeElement {
  key: string;
}

export interface EditionCreated {
  type: TypeEnum;
  value: string;
}

export enum TypeEnum {
  TypeDatetime = '/type/datetime',
  TypeText = '/type/text',
}

export interface Identifiers {
  librarything: string[];
  goodreads: string[];
}

export interface TableOfContent {
  level: number;
  label: string;
  title: string;
  pagenum: string;
}

export interface Links {
  self: string;
  work: string;
  next: string;
}

//#endregion =================== Editions API ===================

//#region =================== Ratings API ===================
export interface IGetWorkRatingResponse {
  summary: Summary;
  counts: {[key: string]: number};
}

export interface Summary {
  average: number;
  count: number;
  sortable: number;
}
//#endregion =================== Ratings API ===================

//#region =================== Books API ===================

interface IGetEditionParams {
  olid: string;
  limit?: number;
  offset?: number;
}

export interface IGetBookResponse {
  publishers: string[];
  description: BookCreated;
  isbn_10: string[];
  series: string[];
  covers: number[];
  full_title: string;
  lc_classifications: string[];
  key: string;
  authors: Type[];
  ocaid: string;
  publish_places: string[];
  isbn_13: string[];
  pagination: string;
  source_records: string[];
  title: string;
  dewey_decimal_class: string[];
  number_of_pages: number;
  languages: Type[];
  subjects: string[];
  publish_date: string;
  publish_country: string;
  by_statement: string;
  oclc_numbers: string[];
  works: Type[];
  type: Type;
  local_id: string[];
  latest_revision: number;
  revision: number;
  created: BookCreated;
  last_modified: BookCreated;
}

export interface Type {
  key: string;
}

export interface BookCreated {
  type: string;
  value: string;
}

//#endregion =================== Books API ===================

export default (() => {
  const getSubject = async ({
    subject,
    limit,
    offset,
  }: IGetSubjectParams): Promise<AxiosResponse<IGetSubjectsResponse>> => {
    try {
      const response = await appClient.get<IGetSubjectsResponse>(
        `${GET_SUBJECT_API}/${subject}.json`,
        {params: {limit, offset}},
      );

      return response;
    } catch (error: any) {
      return error?.response;
    }
  };

  const getWork = async (
    olid: string,
  ): Promise<AxiosResponse<IGetWorkResponse>> => {
    try {
      const response = await appClient.get<IGetWorkResponse>(
        `${GET_WORK_API}/${olid}.json`,
      );

      return response;
    } catch (error: any) {
      return error?.response;
    }
  };

  const getWorkEdition = async ({
    olid,
    limit,
    offset,
  }: IGetEditionParams): Promise<AxiosResponse<IGetEditionsResponse>> => {
    try {
      const response = await appClient.get<IGetEditionsResponse>(
        `${GET_WORK_API}/${olid}/editions.json`,
        {params: {limit, offset}},
      );

      return response;
    } catch (error: any) {
      return error?.response;
    }
  };

  const getWorkRating = async (
    olid: string,
  ): Promise<AxiosResponse<IGetWorkRatingResponse>> => {
    try {
      const response = await appClient.get<IGetWorkRatingResponse>(
        `${GET_WORK_API}/${olid}/ratings.json`,
      );

      return response;
    } catch (error: any) {
      return error?.response;
    }
  };

  const getAuthor = async (
    olid: string,
  ): Promise<AxiosResponse<IGetAuthorResponse>> => {
    try {
      const response = await appClient.get<IGetAuthorResponse>(
        `${GET_AUTHOR_API}/${olid}.json`,
      );

      return response;
    } catch (error: any) {
      return error?.response;
    }
  };

  const getBook = async (
    olid: string,
  ): Promise<AxiosResponse<IGetBookResponse>> => {
    try {
      const response = await appClient.get<IGetBookResponse>(
        `${GET_BOOK_API}/${olid}.json`,
      );

      return response;
    } catch (error: any) {
      return error?.response;
    }
  };

  return {
    getSubject,
    getWork,
    getAuthor,
    getWorkEdition,
    getWorkRating,
    getBook,
  };
})();
