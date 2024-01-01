import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'; // Import react-hook-form
import { TextInput } from '@components/ui/Input';
import { FilledButton, GoogleButton, TextButton } from '@components/ui/Buttons';
import {
	GoogleAuthProvider,
	getRedirectResult,
	signInWithRedirect,
} from 'firebase/auth';
import { z } from 'zod';
import Google from '@assets/google.svg';
import { LuSwords } from 'react-icons/lu';
import { auth } from 'src/firebase.config';
import { authActions } from '@store/auth-slice';
import { getAuthenticatedUser } from '@utils/auth-utils';

function AuthPage() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	function formSubmitHandler(data) {
		console.log(data);
	}
	const dipatch = useDispatch();
	async function signInWithGoogle() {
		const provider = new GoogleAuthProvider();
		provider.addScope('email');
		provider.addScope('profile');
		await signInWithRedirect(auth, provider);
		const userCredentials = await getRedirectResult(auth);
		dipatch(authActions.login(getAuthenticatedUser(userCredentials.user)));
	}

	const inputFields = [
		{ label: 'Email', type: 'text' },
		{ label: 'Password', type: 'password' },
	];
	return (
		<div className='w-full flex h-full bg-neutral-100'>
			<div className='flex-grow hidden' />
			<form
				onSubmit={handleSubmit(formSubmitHandler)}
				className='flex flex-col gap-2 w-full bg-white md:m-3 rounded-lg px-8 md:px-32 py-24 shadow'
			>
				<div className='flex flex-col items-center mb-12'>
					<div>
						<LuSwords className='text-2xl mb-4' />
					</div>
					<h1 className='text-4xl font-medium mb-2'>Welcome back!</h1>
					<h3 className='text-sm font-medium'>Please enter your details</h3>
				</div>
				{inputFields.map((field) => (
					<TextInput
						key={field.label}
						type={field.type}
						label={field.label}
						register={register}
						error={errors[field.label]}
					/>
				))}

				{/* <TextInput label='Full Name' register={register} />
				<TextInput
					label='Email'
					register={register}
					options={{ required: true }}
					error={errors['Email']}
				/>
				<TextInput
					label='Password'
					register={register}
					options={{ required: true }}
					error={errors['Password']}
				/> */}

				<div className='flex flex-col mt-8 gap-3'>
					<FilledButton type='submit' className='w-fullrounded-full'>
						Sign In
					</FilledButton>
					<GoogleButton svg={Google} onClick={signInWithGoogle}>
						Sign in with Google
					</GoogleButton>
				</div>
				<div className='flex gap-1 items-center text-sm justify-center mt-1'>
					<span>Don&apos;t have an account?</span>
					<TextButton>Sign Up</TextButton>
				</div>
			</form>
		</div>
	);
}

export default AuthPage;
