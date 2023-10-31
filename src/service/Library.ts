import {AxiosResponse} from 'axios';
import appClient from 'src/clients/appClient';
import {GET_SUBJECT_API} from 'src/constants/api';

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

  return {getSubject};
})();
