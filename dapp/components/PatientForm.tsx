import Input from './Input';
import Button from './Button';
import { useState } from 'react';

type Props = {
  postPatient: ( 
    pname: string,
    report: string,
    treatment: string,
    ppno: string,
    paddress: string
  ) => void;
};

const PatientForm: React.FC<Props> = ({ postPatient }) => {
  const [pname, setPname] = useState<string>('');
  const [report, setReport] = useState<string>('');
  const [treatment, setTreatment] = useState<string>('');
  const [ppno, setPpno] = useState<string>('');
  const [paddress, setPaddress] = useState<string>('');

  const handlePost = async () => {
    postPatient(pname,report,treatment,ppno,paddress);
  };

  return (
    <div className="w-80">
        <div className="grid grid-cols-1 gap-6">
            <Input 
            label="Patient Name" 
            value={pname} 
            setValue={setPname} 
            />
            <Input 
            label="Patient report" 
            value={report} 
            setValue={setReport} 
            />
            <Input 
            label="Treatment Suggested" 
            value={treatment} 
            setValue={setTreatment} 
            />
            <Input 
            label="Patient's phone number" 
            value={ppno} 
            setValue={setPpno} 
            />
            <Input 
            label="Patient's address" 
            value={paddress} 
            setValue={setPaddress} 
            />
        </div>
        <div className="mt-4 flex items-center justify-center px-4">
          <Button label="Post" onClick={handlePost} />
        </div>
    </div>
  );
};

export default PatientForm;