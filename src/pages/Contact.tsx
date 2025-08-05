import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';

import Button from '../components/Button';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";

import Reveal from '../components/Reveal';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required('El nombre es obligatorio'),
  email: yup.string().email('Correo inválido').required('El correo es obligatorio'),
  message: yup.string().required('El mensaje es obligatorio'),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
     mode: 'onChange',
  });

const onSubmit = async (data: ContactFormData) => {
  try {
    const response = await fetch('https://formspree.io/f/xovlkkqv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success(`Formulario enviado correctamente`)
      reset();
    } else {
      toast.error('Ocurrió un error. Probá de nuevo 😢');
    }
  } catch (error) {
    toast.error('Ocurrió un error inesperado 😢');
  }
};


  return (
    <section id="contact" className="py-24 px-6 text-center">
        <Reveal>
            <h2 className="text-3xl font-bold mb-10 flex align-center justify-center gap-2 "><IoIosMail />
 Contacto</h2>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto space-y-6 text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FormInput
          label="Nombre"
          placeholder="Tu nombre"
          {...register('name')}
          error={errors.name?.message}
        />

        <FormInput
          label="Correo"
          type="email"
          placeholder="Tu correo"
          {...register('email')}
          error={errors.email?.message}
        />

        <FormTextarea
          label="Mensaje"
          placeholder="Escribime tu mensaje ✨"
          rows={5}
          {...register('message')}
          error={errors.message?.message}
        />

        <Button
          type="submit"
          className="bg-[var(--primary-color)] w-full py-2 font-semibold  hover:scale-105 transition-transform "
          onClick={() => {}}
        >
          Enviar mensaje
        </Button>
      </motion.form>

      <div className="mt-10 flex justify-center gap-6 text-2xl">
        <a
          href="https://github.com/FlorenciaRusso9606"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--primary-hover-color)] hover:scale-105"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/florencia-russo-65976b287/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[var(--primary-hover-color)] hover:scale-105"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:russoflorencia96@gmail.com"
          className="hover:text-[var(--primary-hover-color)] hover:scale-105"
        >
          <FaEnvelope />
        </a>
      </div>
        </Reveal>
      
    </section>
  );
};

export default Contact;
