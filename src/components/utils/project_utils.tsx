
import axios from 'axios';


const COUNTRY_CODE = "CA";


  export function fetch_address_lookup(proposedAddress: string): any {
        try {
          return axios.get(
            `https://nominatim.openstreetmap.org/search?addressdetails=1&q=${proposedAddress}&format=json&countrycodes=${COUNTRY_CODE}`
          );

        } catch (e: any) {
          console.log({ nominatimError: e.message });
        }
  }