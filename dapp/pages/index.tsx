import Head from 'next/head';
import Button from '../components/Button';
import SignUpForm from '../components/SignUpForm';
import PatientForm from '../components/PatientForm';
import useDwitter from '../hooks/useMedfile';

export default function Home() {
  const { connect, account, user, createUser,postPatient,patients} = useDwitter();

  return (
    <div className="cursor-pointer flex min-h-screen flex-col items-center justify-center p-1 bg-black">
      <Head>
        <title>Medfile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20">
        <h1 className="mb-8">
          <span className="opacity-80 drop-shadow-2xl font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Medfile </span>
        </h1>

        {!account ? (
          <Button label="Connect with Ethereum" onClick={connect} />
        ) : account.toUpperCase() !== user?.wallet.toUpperCase() ? (<SignUpForm createUser={createUser} />) : (<>
        <p className='text-gray-600 m-10'>Hi {user?.post} {user?.name}</p>
        <PatientForm postPatient={postPatient}/></>)}
        { patients.map(patient=>(
          <div className="block m-6 p-6 w-80 bg-black rounded-lg border border-gray-800 shadow-md">
            <h5 className="mb-1 text-4xl font-bold text-white">{patient.pname}</h5>
            <h5 className="mb-1 text-xl font-bold text-slate-400">{patient.ppno}</h5>
            <h5 className="mb-3 text-xl font-bold text-slate-400">{patient.paddress}</h5>
            <p className="font-normal text-white">{patient.report}</p>
            <p className="font-normal text-slate-400">{patient.treatment}</p>
            <p className="font-normal text-emerald-400 text-clip overflow-hidden">Submitted by {patient.author}</p>
          </div>
        ))}
      </main>

      <footer className="text-gray-400 flex h-24 w-full items-center justify-center">
        Made By Rachit Gupta
      </footer>
    </div>
  );
}
