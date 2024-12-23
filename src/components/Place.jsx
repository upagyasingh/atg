import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { TriangleAlert } from 'lucide-react';
import Groups from './Groups'

function Place() {

    const places = [
        { label: 'Agra', year: 'Uttar Pradesh' },
        { label: 'Bengaluru', year: 'Karnataka' },
        { label: 'Chennai', year: 'Tamil Nadu' },
        { label: 'Delhi', year: 'Delhi' },
        { label: 'Jaipur', year: 'Rajasthan' },
        { label: 'Kolkata', year: 'West Bengal' },
        { label: 'Mumbai', year: 'Maharashtra' },
        { label: 'Hyderabad', year: 'Telangana' },
        { label: 'Bhopal', year: 'Madhya Pradesh' },
        { label: 'Lucknow', year: 'Uttar Pradesh' },
        { label: 'Pune', year: 'Maharashtra' },
        { label: 'Goa', year: 'Goa' },
        { label: 'Ahmedabad', year: 'Gujarat' },
        { label: 'Kochi', year: 'Kerala' },
        { label: 'Indore', year: 'Madhya Pradesh' },
        { label: 'Surat', year: 'Gujarat' },
        { label: 'Patna', year: 'Bihar' },
        { label: 'Varanasi', year: 'Uttar Pradesh' },
        { label: 'Chandigarh', year: 'Chandigarh' },
        { label: 'Nashik', year: 'Maharashtra' },
        { label: 'Dehradun', year: 'Uttarakhand' },
        { label: 'Ranchi', year: 'Jharkhand' },
        { label: 'Shillong', year: 'Meghalaya' },
        { label: 'Visakhapatnam', year: 'Andhra Pradesh' },
        { label: 'Madurai', year: 'Tamil Nadu' },
        { label: 'Vadodara', year: 'Gujarat' },
        { label: 'Coimbatore', year: 'Tamil Nadu' },
        { label: 'Noida', year: 'Uttar Pradesh' },
        { label: 'Mysuru', year: 'Karnataka' },
        { label: 'Tirupati', year: 'Andhra Pradesh' },
        { label: 'Jammu', year: 'Jammu and Kashmir' },
        { label: 'Vijayawada', year: 'Andhra Pradesh' },
        { label: 'Kanpur', year: 'Uttar Pradesh' },
        { label: 'Rajkot', year: 'Gujarat' },
        { label: 'Aurangabad', year: 'Maharashtra' },
        { label: 'Jodhpur', year: 'Rajasthan' },
        { label: 'Udaipur', year: 'Rajasthan' },
        { label: 'Guwahati', year: 'Assam' },
        { label: 'Shimla', year: 'Himachal Pradesh' },
        { label: 'Bhubaneswar', year: 'Odisha' },
        { label: 'Dhanbad', year: 'Jharkhand' },
        { label: 'Rourkela', year: 'Odisha' },
        { label: 'Raipur', year: 'Chhattisgarh' },
        { label: 'Bhilai', year: 'Chhattisgarh' },
        { label: 'Jalgaon', year: 'Maharashtra' },
        { label: 'Kolhapur', year: 'Maharashtra' },
        { label: 'Gwalior', year: 'Madhya Pradesh' },
        { label: 'Bikaner', year: 'Rajasthan' },
        { label: 'Mangalore', year: 'Karnataka' },
        { label: 'Srinagar', year: 'Jammu and Kashmir' },
        { label: 'Pondicherry', year: 'Puducherry' },
        { label: 'Kozhikode', year: 'Kerala' },
        { label: 'Thane', year: 'Maharashtra' },
        { label: 'Gurugram', year: 'Haryana' },
        { label: 'Jabalpur', year: 'Madhya Pradesh' },
        { label: 'Faridabad', year: 'Haryana' },
        { label: 'Navi Mumbai', year: 'Maharashtra' },
        { label: 'Kota', year: 'Rajasthan' },
        { label: 'Solapur', year: 'Maharashtra' },
        { label: 'Chandrapur', year: 'Maharashtra' },
        { label: 'Bilaspur', year: 'Chhattisgarh' },
        { label: 'Aligarh', year: 'Uttar Pradesh' },
        { label: 'Durg', year: 'Chhattisgarh' },
        { label: 'Satna', year: 'Madhya Pradesh' },
        { label: 'Siliguri', year: 'West Bengal' },
        { label: 'Gaya', year: 'Bihar' },
        { label: 'Kollam', year: 'Kerala' },
        { label: 'Rajahmundry', year: 'Andhra Pradesh' },
        { label: 'Chittoor', year: 'Andhra Pradesh' },
        { label: 'Tirunelveli', year: 'Tamil Nadu' },
        { label: 'Nagapattinam', year: 'Tamil Nadu' },
        { label: 'Haldia', year: 'West Bengal' },
        { label: 'Tiruvannamalai', year: 'Tamil Nadu' },
        { label: 'Madurai', year: 'Tamil Nadu' },
        { label: 'Warangal', year: 'Telangana' },
        { label: 'Cuttack', year: 'Odisha' }
      ];
      
    
    

  return (
    <div style={{ position: "sticky", top: "150px" , zIndex : 1 }} className='700:hidden'>
      <Autocomplete
      disablePortal
      options={places}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Noida ,India" />}
    />
    <div className='w-[300px]  mt-3 grid grid-cols-4 items-center'>
        <div className='flex justify-center items-center'>
        <TriangleAlert/> 
        </div>
        <p className='col-span-3'>Your location will help us serve better and extend a personalised experience.</p>
    </div>
    <Groups/>
    </div>
  )
}

export default Place
