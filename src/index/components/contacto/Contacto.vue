<template>
  <div class="pr-2 pt-6  text-right">
    <h1 class="2xl:text-3xl 3xl:pb-12 mr-4 font-mukta text-lg text-right font-mukta w800 ">
        Contacto y Ubicación
    </h1>
  </div>
  <div class="md:flex md:flex-row md:pt-5 w-full"> 
    
    <form class="flex flex-col md:-mt-5 3xl:-mt-0 w-72 3xl:w-96 mx-auto contact-form"  @submit.prevent="sendEmail" >
      

      <label class="3xl:text-2xl 3xl:mt-6 font-mukta w800 md:mt-2 mt-1">Nombre:</label>
      <input class="rounded-2xl shadow-md text-sm 3xl:text-xl h-8 " type="text" placeholder="Ingrese su nombre" required v-model="nombre" name="nombre">
      
      <label class="3xl:text-2xl 3xl:mt-6 font-mukta w800 md:mt-2 mt-1">Correo:</label>
      <input class="rounded-2xl shadow-md text-sm 3xl:text-xl h-8 " type="email" required placeholder="correo@ejemplo.cl" v-model="email" name="email">

      <label class="3xl:text-2xl 3xl:mt-6 font-mukta w800 md:mt-2 mt-1">Teléfono:</label>
      <input class="rounded-2xl shadow-md text-sm 3xl:text-xl h-8 " type="tel" required placeholder="+56 9 92341234" v-model="tel" name="tel">
      
      <label class="3xl:text-2xl 3xl:mt-6 font-mukta w800 mt-2">Comentarios:</label>
      <textarea class="rounded-2xl shadow-md text-sm 3xl:text-xl 3xl:h-20 " required placeholder="Comentarios" v-model="comentario" name="mensaje">
      </textarea>
      
      <input 
        type="submit"
        value='Enviar Comentario'
        class="3xl:text-2xl 3xl:mt-10 rounded-2xl border-2 border-green my-4 bg-white transition duration-500 ease-in-out hover:bg-green hover:text-white "
      >
      
      
    </form>



    <div class="3xl:hidden md:flex md:mx-auto md:shadow-lg my-auto border-gray-800 border border-solid">
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.3005827583575!2d-70.6416548851949!3d-33.623447480724806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d83135b81d3d%3A0x13853695d127df09!2sBolsapac!5e0!3m2!1ses-419!2scl!4v1618882667556!5m2!1ses-419!2scl"
      width="400"
      height="300"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      
      >
      </iframe>
    </div>
    <div class="hidden 3xl:flex mx-auto my-auto border-2 border-black shadow-lg" >
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.3005827583597!2d-70.64165488521203!3d-33.62344748072476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d83135b81d3d%3A0x13853695d127df09!2sBolsapac!5e0!3m2!1sen!2scl!4v1620165859552!5m2!1sen!2scl" 
      width="600" 
      height="450" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy">
      </iframe>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
    name: 'Contacto',
    data() {
      return{
        email: '',
        nombre: '',
        tel: '',
        comentario: ''

      }
    },
    methods: {
    sendEmail: (e) => {
        emailjs.sendForm('service_a4mfyze', 'template_2jdaaof', e.target, 'user_uNcT90SfTIHEpTCucIJom')
        .then((result) => {
            console.log('Éxito!', result.status, result.text);
      
        }, (error) => {
            console.log('No se ha podido enviar el mensaje...', error);
        });
    
    },
    resetInput(){
      this.nombre = ''
      this.email = ''
      this.comentario = ''
      this.tel = ''
    }
  }
}






</script>