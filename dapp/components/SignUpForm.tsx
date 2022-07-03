import Input from './Input';
import Button from './Button';
import { useState } from 'react';

type Props = {
  createUser: (
    userid: string,
    name: string,
    post: string,
    pno: string
  ) => void;
};

const SignUpForm: React.FC<Props> = ({ createUser }) => {
  const [userid, setUserid] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [post, setPost] = useState<string>('');
  const [pno, setPno] = useState<string>('');

  const handleRegister = async () => {
    createUser(userid, name, post, pno);
  };

  return (
    <div className="w-80">
      <div className="grid grid-cols-1 gap-6">
        <Input
          label="Enter Your ID"
          value={userid}
          setValue={setUserid}
        />
        <Input
          label="Enter your full name"
          value={name}
          setValue={setName}
        />
        <Input 
        label="Enter your role" 
        value={post} 
        setValue={setPost} 
        />
        <Input 
        label="Enter your phone number" 
        value={pno} 
        setValue={setPno} 
        />
        <div className="mt-4 flex items-center justify-center px-4">
          <Button label="Sign Up" onClick={handleRegister} />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;