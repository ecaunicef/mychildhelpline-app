import LocalizedStrings from 'react-native-localization'

const localization: any = new LocalizedStrings({
    en: {
        // Splash Screen
        myChild: 'MyChild',
        helpline: 'Helpline',
        inThePalmOfYourHands: '#inthepalmofyourhands',
        supportedBy: 'Supported by',

        // First Slide Screen
        firstSlideHello: 'Hello',
        welcomeTo: 'Welcome to',
        myChildHelpLine: 'MyChild HelpLine!',
        introductionFirstParagraph1: 'A safe space to find help',
        introductionFirstParagraph2: 'Let’s take a quick tour!',
        skipText: 'Skip',
        doneText: 'Done',

        // Second Slide Screen
        yourPrivacyMatters: 'Your Privacy Matters',
        introductionSecondParagraph1:
            'We’re here to make sure you get help safely and confidentially.',

        // Third Slide Screen
        youAreNotAlone: 'You’re Not Alone',
        introductionThirdParagraph1:
            'Need someone to listen? You can book a counselling session to help you.',

        // Register Screen
        letMeKnow: 'Let me know you!',
        language: 'Language',
        gender: 'Gender',
        country: 'Country',
        district: 'District',
        dob: 'Date Of Birth',
        callName: 'What should we call you?',
        wantToSeeSelf: 'How do you want to see yourself ?',
        chooseAvatar: 'Choose your Avatar',
        orText: 'or',
        uploadImage: ' Upload an Image',
        concentDescription:
            'The information you enter is secure and allows us to provide you with accurate country-specific services. You remain anonymous and only your biological data (i.e. age, location and gender) are captured on our system.',
        privacyContent: 'I have read, understood and accepted the ',
        privacyPolicy: 'Privacy Policy ',
        privacyAnd: 'and ',
        termConditions: 'Terms and Conditions',
        nextText: 'Next',
        English: 'English',
        Spanish: 'Spanish',
        French: 'French',
        Dutch: 'Dutch',
        Male: 'Male',
        Female: 'Female',
        Other: 'Other',

        // Home Screen
        goodMorning: 'Good Morning',
        callus: 'Call us',
        Talktoone: "Talk to one of our listeners. It's free and confidential.",
        reqcoun: 'Request for counselling',
        TalktooneListner: 'Need Help? Request a counselling session here',
        mydiary: 'My Diary',
        mydiaryText: 'Record anything in your own personal diary.',
        mychillspot: 'My Chill Spot',
        mychillspotText: 'Relax and refresh yourself!',
        arcade: 'Arcade',
        arcadeText: 'Have spare time? Play one of our classic games.',
        mentalHealth: 'U-Matter Mental Health Textline',
        mentalHealthText: 'Have something to say? Start chatting now!',

        // Emoji Modal
        howYouFeel: 'How are you feeling \ntoday?',
        Happy: 'Happy',
        Excited: 'Excited',
        Loved: 'Loved',
        Sad: 'Sad',
        Angry: 'Angry',
        Depressed: 'Depressed',
        Stressed: 'Stressed',
        Guilty: 'Guilty',
        Lonely: 'Lonely',
        Resilient: 'Resilient',
        Hurt: 'Hurt',

        // Emoji Second Modal
        feeling: 'Feeling',
        hello: 'Hello',
        goodnews: 'That’s wonderful news!',

        //Information kiosk page
        informationkiosk: 'Information Kiosk',
        yourdestination:
            'Your one-stop destination for guidance, and assistance!',
        myrights: 'My Rights',
        ourrights: 'Want to know your rights?',
        parentinghub: 'The Parenting Hub',
        parentingtitle: 'Helpful tips, insights and facts for parents.',
        gosservices: 'Government Services',
        gosservicessubtitle:
            'MyChild Helpline app is supported by Government services of Anguilla. Click here to visit.',
        resources: 'Resources',
        resourcessubtitle: 'Your ultimate source for help and insights!',
        helpinghand: 'Helping hand',
        mychildhelpline: 'My Child Helpline',
        mychildhelplinesubtitle: 'Click here to learn more about the app.',
        UNICEF: 'UNICEF Eastern Caribbean Area',
        UNICEFsubtitle:
            'MyChild Helpline app is supported by  UNICEF. tap to visit UNICEF.',
        infokiosk: 'Information Kiosk',
        myspace: 'My Space',
        fillFormLine: 'Fill the form below to book your counselling.',
        appointmentDate: 'Appointment Date',
        reasonForCounselling: 'What led you to request counselling?',
        reasonsSelected: 'Reasons Selected',
        reasonSelected: 'Reason Selected',
        firstName: 'First Name',
        lastName: 'Last Name',
        telephoneNumber: 'Telephone Number',
        message: 'Message',
        loading: 'Loading...',
        bookCounselling: 'Book Your Counselling',
        cancel: 'Cancel',
        share: 'Share',
        delete: 'Delete',
        yourDiaryIsEmpty: 'Your diary is empty',
        whyNotAddEntry: 'Why not add an entry?',
        addEntry: 'Add Entry',
        updateEntry: 'Update Entry',
        title: 'Title',
        startWriting: 'Start writing',
        save: 'Save',
        update: 'Update',
        close: 'Close',
        welcomeMessage:
            'Welcome to your Chill Spot! Take a few moments to relax.',
        breath: 'Breath',
        counting: 'Counting from 10',
        welcomeArcade:
            'Welcome to the arcade! The arcade is now open. Play one of our classic games.',
        tictactoe: 'Tic Tac Toe',
        puzzle: 'Puzzle',
        bounce: 'Bounce',
        ok: 'OK',
        chatline: 'ChatLine',
        name: 'Name',
        email: 'Email',
        contact: 'Contact',
        Enteryouremail: 'Enter your email',
        Enteryourcontact: 'Enter your contact number',
        Enteryourmessage: 'Enter your message',
        successFeedback:
            'Thanks for giving us feedback, your feedback is valuable!',
        errorFeedback: 'Failed to submit feedback, please try again later.',
        userDetailsError: 'User details not found',
        invalidEmailError: 'Please provide a valid email address!',
        invalidContactError: 'Contact Number must be at least 10 digits!',
        emptyNameError: 'Name cannot be empty!',
        emptyMessageError: 'Message cannot be empty!',
        updateprofile: 'Update Your Profile',
        givefeedback: 'Give us Feedback',
        fontfamily: 'Font Family',
        lineheight: 'Line Height',
        text: 'Text',
        accessibility: 'Accessibility',
        broadcastmsg: 'Broadcast Messages',
        customizeyouravatar: 'Customize Your Avatar',
        peekabool:
            "Peek-a-bool Hey.. My name is Helping Hand. I'm glad you joined me to learn about your rights as a child. What are these rights?",
        childrightstext:
            'Every child has rights. Rights are what you should have or be able to do to have the best start in life. These rights are listed in the UN Convention on the Rights of the Child. They are for all children under age 18, in every part of the world. All rights are equally important and are connected to each other. You are born with these rights, and no one can take them away.',
        knowrights:
            'Know your rights! Discover how they protect and empower you.',
        letsgo: "Let's Go",
        pause: 'Pause',
        play: 'Play',
        nodescription: 'No description available.',
        datacollectionpolicy: 'Data Collection Policy',
        datasharingpolicy: 'Data Sharing Policy',
        privacypolicy: 'Privacy Policy',
        call: 'Call',
        website: 'Website',
        location: 'Location',
        confirmdeletion: 'Confirm Deletion',
        confirmdeletionmsg:
            'Are you sure you want to delete your account? This action cannot be undone.',
        settings: 'Settings',
        diarylock: 'Enable Diary Lock',
        applock: 'Enable App Lock',
        policies: 'Policies',
        faqs: 'FAQs',
        howtousetheapp: 'How to use the app',
        feedback: 'Feedback',
        deleteaccount: 'Delete Account',
        about: 'About',
        aboutMyChildHelpline: 'About MyChild Helpline',
        registeredsuccessfully: 'Registered Successfully',
        success: 'success',
        selectLanguageError: 'Please select your language!',
        selectGenderError: 'Please select your gender!',
        selectCountryError: 'Please select your country!',
        selectDistrictError: 'Please select your district!',
        selectDobError: 'Please select your date of birth!',
        ageTooYoungError: 'Age should be more than 2 years!',
        ageTooOldError: 'Age cannot be greater than 90 years!',
        enterNameError: 'Please enter your name!',
        registrationSuccess: 'Registered Successfully',
        serverError: 'Registration failed due to server error.',
        noServerResponseError:
            'No response from the server. Please try again later.',
        unexpectedError: 'An unexpected error occurred. Please try again.',
        appointmentDateError: 'Appointment date is required',
        selectReasonError: 'Please select reason',
        enterFirstNameError: 'Please enter your first name',
        enterLastNameError: 'Please enter your last name',
        enterTelephoneError: 'Please enter a valid telephone number',
        invalidTelephoneError: 'Please enter a valid telephone number',
        enterMessageError: 'Please enter message',
        counsellingSuccessTitle: 'Thanks for requesting counselling',
        counsellingSuccessMessage:
            'Your request has been successfully submitted. A counsellor will contact you shortly. Thank you for reaching out!',
        okButton: 'Ok',
        profileUpdateSuccess: 'Profile Updated Successfully',
        dyslexiaFriendly: 'Dyslexia Friendly',
        biggerText: 'Bigger Text',
        lineHeight: 'Line Height',
        textSpacing: 'Text Spacing',
        unicefText:
            'In 2021, UNICEF Office for the Eastern Caribbean Area (ECA) redesigned the Trinidad and Tobago UNICEF-supported MyChildLine app, now called "MyChiId Helpline" app- to cover four (4) countries Antigua and Barbuda, Barbados, Grenada, and St. Vincent and the Grenadines. In 2023, the app is now available to all twelve (12) countries and overseas territories covered under the office\'s Multi- Country Programme, including Anguilla, Dominica, Montserrat, St. Kitts and Nevis, St. Lucia, Turks and Caicos Islands, Virgin Islands (UK)',
        helpingHandText: 'Hello, welcome to the MyChild Helpline!',
        writeYourMessage: 'Write your message here...',

        // My Rights

        right1: 'A child is any person under the age of 18.',
        right2: 'All children have all these rights, no matter who they are, where they live, what language they speak, what their religion is, what they think, what they look like, if they are a boy or girl, if they have a disability, if they are rich or poor, and no matter who their parents or families are or what their parents or families believe or do. No child should be treated unfairly for any reason.',
        right3: 'When adults make decisions, they should think about how their decisions will affect children. All adults should do what is best for children. Governments should make sure children are protected and looked after by their parents, or by other people when this is needed. Governments should make sure that people and places responsible for looking after children are doing a good job.',
        right4: 'Governments must do all they can to make sure that every child in their countries can enjoy all the rights in this Convention.',
        right5: 'Governments should let families and communities guide their children so that, as they grow up, they learn to use their rights in the best way. The more children grow, the less guidance they will need.',
        right6: 'Every child has the right to be alive. Governments must make sure that children survive and develop in the best possible way.',
        right7: 'Children must be registered when they are born and given a name which is officially recognized by the government. Children must have a nationality (belong to a country). Whenever possible, children should know their parents and be looked after by them.',
        right8: 'Children have the right to their own identity – an official record of who they are which includes their name, nationality and family relations. No one should take this away from them, but if this happens, governments must help children to quickly get their identity back.',
        right9: 'Children should not be separated from their parents unless they are not being properly looked after – for example, if a parent hurts or does not take care of a child. Children whose parents don’t live together should stay in contact with both parents unless this might harm the child.',
        right10:
            'If a child lives in a different country than their parents, governments must let the child and parents travel so that they can stay in contact and be together.',
        right11:
            'Governments must stop children being taken out of the country when this is against the law – for example, being kidnapped by someone or held abroad by a parent when the other parent does not agree.',
        right12:
            'Children have the right to give their opinions freely on issues that affect them. Adults should listen and take children seriously.',
        right13:
            'Children have the right to share freely with others what they learn, think and feel, by talking, drawing, writing or in any other way unless it harms other people.',
        right14:
            'Children can choose their own thoughts, opinions and religion, but this should not stop other people from enjoying their rights. Parents can guide children so that as they grow up, they learn to properly use the right',
        right15:
            'Children can join or set up groups or organisations, and they can meet with others, as long as this does not harm other people.',
        right16:
            'Every child has the right to privacy. The law must protect children’s privacy, family, home, communications and reputation (or good name) from any attack.',
        right17:
            'Children have the right to get information from the Internet, radio, television, newspapers, books and other sources. Adults should make sure the information they are getting is not harmful. Governments should encourage the media to share information from lots of different sources, in languages that all children can understand.',
        right18:
            'Parents are the main people responsible for bringing up a child. When the child does not have any parents, another adult will have this responsibility and they are called a “guardian”. Parents and guardians should always consider what is best for that child. Governments should help them. Where a child has both parents, both of them should be responsible for bringing up the child.',
        right19:
            'Governments must protect children from violence, abuse and being neglected by anyone who looks after them.',
        right20:
            'Every child who cannot be looked after by their own family has the right to be looked after properly by people who respect the child’s religion, culture, language and other aspects of their life.',
        right21:
            'When children are adopted, the most important thing is to do what is best for them. If a child cannot be properly looked after in their own country – for example by living with another family – then they might be adopted in another country.',
        right22:
            'Children who move from their home country to another country as refugees (because it was not safe for them to stay there) should get help and protection and have the same rights as children born in that country.',
        right23:
            'Every child with a disability should enjoy the best possible life in society. Governments should remove all obstacles for children with disabilities to become independent and to participate actively in the community.',
        right24:
            'Children have the right to the best health care possible, clean water to drink, healthy food and a clean and safe environment to live in. All adults and children should have information about how to stay safe and healthy.',
        right25:
            'Every child who has been placed somewhere away from home - for their care, protection or health – should have their situation checked regularly to see if everything is going well and if this is still the best place for the child to be.',
        right26:
            'Governments should provide money or other support to help children from poor families.',
        right27:
            'Children have the right to food, clothing and a safe place to live so they can develop in the best possible way. The government should help families and children who cannot afford this.',
        right28:
            'Every child has the right to an education. Primary education should be free. Secondary and higher education should be available to every child. Children should be encouraged to go to school to the highest level possible. Discipline in schools should respect children’s rights and never use violence.',
        right29:
            'Children’s education should help them fully develop their personalities, talents and abilities. It should teach them to understand their own rights, and to respect other people’s rights, cultures and differences. It should help them to live peacefully and protect the environment.',
        right30:
            'Children have the right to use their own language, culture and religion - even if these are not shared by most people in the country where they live.',
        right31:
            'Every child has the right to rest, relax, play and to take part in cultural and creative activities.',
        right32:
            'Children have the right to be protected from doing work that is dangerous or bad for their education, health or development. If children work, they have the right to be safe and paid fairly.',
        right33:
            'Governments must protect children from taking, making, carrying or selling harmful drugs.',
        right34:
            'The government should protect children from sexual exploitation (being taken advantage of) and sexual abuse, including by people forcing children to have sex for money, or making sexual pictures or films of them.',
        right35:
            'Governments must make sure that children are not kidnapped or sold, or taken to other countries or places to be exploited (taken advantage of).',
        right36:
            'Children have the right to be protected from all other kinds of exploitation (being taken advantage of), even if these are not specifically mentioned in this Convention.',
        right37:
            'Children who are accused of breaking the law should not be killed, tortured, treated cruelly, put in prison forever, or put in prison with adults. Prison should always be the last choice and only for the shortest possible time. Children in prison should have legal help and be able to stay in contact with their family.',
        right38:
            'Children have the right to be protected during war. No child under 15 can join the army or take part in war.',
        right39:
            'Children have the right to get help if they have been hurt, neglected, treated badly or affected by war, so they can get back their health and dignity.',
        right40:
            'Children accused of breaking the law have the right to legal help and fair treatment. There should be lots of solutions to help these children become good members of their communities. Prison should only be the last choice.',
        right41:
            'If the laws of a country protect children’s rights better than this Convention, then those laws should be used.',
        right42:
            'Governments should actively tell children and adults about this Convention so that everyone knows about children’s rights.',
        right43:
            'These articles explain how governments, the United Nations – including the Committee on the Rights of the Child and UNICEF - and other organisations work to make sure all children enjoy all their rights.',
        unlock: 'Unlock',
        areYouSureYouWantToDeleteAlNotes:
            'Are you sure, you want to delete all notes?',
        camera: 'Camera',
        avatar: 'Avatar',
        chooseOption: 'Choose option',
        pleaseAuthenticateToContinue:
            'Because you enabled the App lock function, please authenticate to continue',
        enterText: 'Enter text',
        enterNumber: 'Enter number',
        selectDate: 'Select date',
        selectedGender: 'Select gender',
        selectLanguage: 'Select language',
        selectCountry: 'Select country',
        selectDistrict: 'Select district',
        selectMultipleReason: 'Select multiple reasons',
        typeHere: 'Type here...',
    },

    es: {
        // Splash Screen
        myChild: 'MyChild',
        helpline: 'Línea de ayuda',
        inThePalmOfYourHands: '#enlapalmadetusmanos',
        supportedBy: 'Apoyado por',

        // First Slide Screen
        firstSlideHello: 'Hello',
        welcomeTo: '¡Bienvenido a',
        myChildHelpLine: 'MyChild HelpLine!',
        introductionFirstParagraph1: 'Un espacio seguro para encontrar ayuda.',
        introductionFirstParagraph2: '¡Hagamos un recorrido rápido!',
        skipText: 'Saltar',
        doneText: 'Hecho',

        // Second Slide Screen
        yourPrivacyMatters: 'Tu privacidad importa',
        introductionSecondParagraph1:
            'Estamos aquí para asegurarnos de que reciba ayuda de forma segura y confidencial.',

        // Third Slide Screen
        youAreNotAlone: 'No estás solo',
        introductionThirdParagraph1:
            '¿Necesitas que alguien te escuche? Puedes reservar una sesión de asesoramiento para ayudarte.',

        // Register Screen
        letMeKnow: '¡Déjame conocerte!',
        language: 'Idioma',
        gender: 'Género',
        country: 'País',
        district: 'Distrito',
        dob: 'Fecha de nacimiento',
        callName: '¿Cómo deberíamos llamarte ?',
        wantToSeeSelf: '¿Cómo quieres verte ?',
        chooseAvatar: 'Elige tu avatar',
        orText: 'o',
        uploadImage: 'Subir una imagen',
        concentDescription:
            'La información que ingresa es segura y nos permite brindarle servicios precisos específicos de cada país. Usted permanece en el anonimato y en nuestro sistema solo se capturan sus datos biológicos (es decir, edad, ubicación y sexo',
        privacyContent: 'He leído, entendido y aceptado la ',
        privacyPolicy: 'Política de privacidad',
        privacyAnd: 'y ',
        termConditions: 'Términos y condiciones',
        nextText: 'Próximo',
        English: 'Inglés',
        Spanish: 'Español',
        French: 'Francés',
        Dutch: 'Neerlandés',
        Male: 'Hombre',
        Female: 'Mujer',
        Other: 'Otro',

        // Home Screen
        goodMorning: 'Buen día',
        callus: 'Llámanos',
        Talktoone:
            'Habla con uno de nuestros oyentes. Es gratis y confidencial.',
        reqcoun: 'Solicitud de Consejería',
        TalktooneListner:
            '¿Necesitas ayuda? Solicita una sesión de consejería aquí',
        mydiary: 'Mi Diario',
        mydiaryText: 'Registra cualquier cosa en tu propio diario personal.',
        mychillspot: 'Mi lugar tranquilo',
        mychillspotText: '¡Relájate y refréscate!',
        arcade: 'Arcada',
        arcadeText:
            '¿Tienes tiempo libre? Juega uno de nuestros juegos clásicos.',
        mentalHealth: 'Línea de texto de salud mental de U-Matter',
        mentalHealthText: '¿Tienes algo que decir? ¡Empiece a chatear ahora!',

        // Emoji Modal
        howYouFeel: '¿Cómo te sientes \nhoy?',
        Happy: 'Feliz',
        Excited: 'Entusiasmado',
        Loved: 'Amado',
        Sad: 'Triste',
        Angry: 'Enojada',
        Depressed: 'Deprimido',
        Stressed: 'Estresado',
        Guilty: 'Culpable',
        Lonely: 'Solitario',
        Resilient: 'Resiliente',
        Hurt: 'Herir',

        // Emoji Second Modal
        feeling: 'Sentirse',
        hello: 'Hola',
        goodnews: '¡Esa es una maravillosa noticia!',

        //Information kiosk page
        informationkiosk: 'Quiosco de información',
        yourdestination: '¡Su destino único para orientación y asistencia!',
        myrights: 'Mis Derechos',
        ourrights: '¿Quieres saber tus derechos?',
        parentinghub: 'El Centro de Crianza',
        parentingtitle: 'Consejos útiles, ideas y hechos para padres.',
        gosservices: 'Servicios Gubernamentales',
        gosservicessubtitle:
            'La aplicación MyChild Helpline es compatible con los servicios gubernamentales de Anguila. Haga clic aquí para visitar.',
        resources: 'Recursos',
        resourcessubtitle: '¡Su fuente definitiva de ayuda e información!',
        helpinghand: 'Línea de ayuda de MyChild',
        mychildhelpline: 'Mi Ayuda Infantil',
        mychildhelplinesubtitle:
            'Haga clic aquí para obtener más información sobre la aplicación.',
        UNICEF: 'Área del Caribe Oriental de UNICEF',
        UNICEFsubtitle:
            'La aplicación MyChild Helpline es apoyada por UNICEF. Haz clic para visitar UNICEF.',
        infokiosk: 'Kiosco de Información',
        myspace: 'MiE spacio',
        fillFormLine:
            'Complete el siguiente formulario para reservar su asesoramiento.',
        appointmentDate: 'Fecha de cita',
        reasonForCounselling: '¿Qué te llevó a solicitar la consejería?',
        reasonsSelected: 'Razones seleccionadas',
        reasonSelected: 'Razón seleccionada',
        firstName: 'Nombre de pila',
        lastName: 'Apellido',
        telephoneNumber: 'Número de teléfono',
        message: 'Mensaje',
        loading: 'Cargando...',
        bookCounselling: 'Reserva tu consejería',
        cancel: 'Cancelar',
        share: 'Compartir',
        delete: 'Eliminar',
        yourDiaryIsEmpty: 'Tu diario está vacío',
        whyNotAddEntry: '¿Por qué no agregar una entrada?',
        addEntry: 'Agregar entrada',
        updateEntry: 'Actualizar entrada',
        title: 'Título',
        startWriting: 'Comienza a escribir',
        save: 'Guardar',
        update: 'Actualizar',
        close: 'Cerrar',
        welcomeMessage:
            '¡Bienvenido a tu Chill Spot! Tómate unos momentos para relajarte.',
        breath: 'Respira',
        counting: 'Contando desde 10',
        welcomeArcade:
            '¡Bienvenido al arcade! El arcade ya está abierto. Juega uno de nuestros juegos clásicos.',
        tictactoe: 'tres en raya',
        puzzle: 'Rompecabezas',
        bounce: 'Rebotar',
        ok: 'OK',
        chatline: 'Línea de chat',
        name: 'Nombre',
        email: 'Correo electrónico',
        contact: 'Contacto',
        Enteryouremail: 'Introduce tu correo electrónico',
        Enteryourcontact: 'Introduce tu número de contacto',
        Enteryourmessage: 'Introduce tu mensaje',
        successFeedback:
            '¡Gracias por darnos tu opinión, tu feedback es valioso!',
        errorFeedback:
            'No se pudo enviar el feedback, por favor inténtalo nuevamente más tarde.',
        userDetailsError: 'Detalles del usuario no encontrados',
        invalidEmailError:
            '¡Por favor proporciona un correo electrónico válido!',
        invalidContactError:
            '¡El número de contacto debe tener al menos 10 dígitos!',
        emptyNameError: '¡El nombre no puede estar vacío!',
        emptyMessageError: 'El mensaje no puede estar vacío',
        updateprofile: 'Actualizar tu perfil',
        givefeedback: 'Danos tu opinión',
        fontfamily: 'Familia de fuentes',
        lineheight: 'Altura de línea',
        text: 'Texto',
        accessibility: 'Accesibilidad',
        broadcastmsg: 'Mensajes transmitidos',
        customizeyouravatar: 'Personaliza tu avatar',
        peekabool:
            'Peek-a-bool Hé.. Je mappelle Helping Hand. Je suis heureux que vous me rejoigniez pour en savoir plus sur vos droits en tant quenfant. Quels sont ces droits ?',
        childrightstext:
            'Todo niño tiene derechos. Los derechos son lo que usted debe tener o poder hacer para tener el mejor comienzo en la vida. Estos derechos están enumerados en la convención de las Naciones Unidas sobre los Derechos del Niño. Son para todos los niños menores de 18 años, en todas partes del mundo. Todos los derechos son igualmente importantes y están conectados entre sí. Se nace con estos derechos y nadie te los puede quitar.',
        knowrights:
            '¡Conoce tus derechos! Descubre cómo te protegen y empoderan.',
        letsgo: '¡Vamos!',
        pause: 'Pausa',
        play: 'Jugar',
        nodescription: 'No hay descripción disponible.',
        datacollectionpolicy: 'Política de recopilación de datos',
        datasharingpolicy: 'Política de compartición de datos',
        privacypolicy: 'Política de privacidad',
        call: 'Llamar',
        website: 'Sitio web',
        location: 'Ubicación',
        confirmdeletion: 'Confirmar eliminación',
        confirmdeletionmsg:
            '¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.',
        settings: 'Ajustes',
        diarylock: 'Habilitar bloqueo de diario',
        applock: 'Habilitar bloqueo de aplicación',
        policies: 'Políticas',
        faqs: 'Preguntas frecuentes',
        howtousetheapp: 'Cómo usar la app',
        feedback: 'Retroalimentación',
        deleteaccount: 'Eliminar cuenta',
        about: 'Acerca de',
        aboutMyChildHelpline: 'Acerca de',
        registeredsuccessfully: 'Registrado exitosamente',
        success: 'éxito',
        selectLanguageError: '¡Por favor selecciona tu idioma!',
        selectGenderError: '¡Por favor selecciona tu género!',
        selectCountryError: '¡Por favor selecciona tu país!',
        selectDistrictError: '¡Por favor selecciona tu distrito!',
        selectDobError: '¡Por favor selecciona tu fecha de nacimiento!',
        ageTooYoungError: '¡La edad debe ser mayor a 2 años!',
        ageTooOldError: '¡La edad no puede ser mayor a 90 años!',
        enterNameError: '¡Por favor ingresa tu nombre!',
        registrationSuccess: 'Registrado exitosamente',
        serverError: 'Registro fallido debido a un error en el servidor.',
        noServerResponseError:
            'No hay respuesta del servidor. Por favor, intenta nuevamente más tarde.',
        unexpectedError:
            'Ocurrió un error inesperado. Por favor, inténtalo nuevamente.',
        appointmentDateError: 'La fecha de la cita es obligatoria',
        selectReasonError: '¡Por favor selecciona una razón!',
        enterFirstNameError: '¡Por favor ingresa tu primer nombre!',
        enterLastNameError: '¡Por favor ingresa tu apellido!',
        enterTelephoneError: '¡Por favor ingresa un número de teléfono válido!',
        invalidTelephoneError:
            '¡Por favor ingresa un número de teléfono válido!',
        enterMessageError: '¡Por favor ingresa un mensaje!',
        counsellingSuccessTitle: 'Gracias por solicitar consejería',
        counsellingSuccessMessage:
            'Tu solicitud ha sido enviada con éxito. Un consejero se pondrá en contacto contigo pronto. ¡Gracias por ponerte en contacto!',
        okButton: 'Ok',
        profileUpdateSuccess: 'Perfil actualizado con éxito',
        dyslexiaFriendly: 'Amigable con la dislexia',
        biggerText: 'Texto más grande',
        lineHeight: 'Altura de línea',
        textSpacing: 'Espaciado de texto',
        unicefText:
            'En 2021, la Oficina de UNICEF para el Área del Caribe Oriental (ECA) rediseñó la aplicación MyChildLine de Trinidad y Tobago, respaldada por UNICEF, ahora llamada "Aplicación MyChiId Helpline", para cubrir cuatro (4) países: Antigua y Barbuda, Barbados, Granada y San Vicente. y las Granadinas En 2023, la aplicación ahora estará disponible para los doce (12) países y territorios de ultramar cubiertos por el Programa Multipaís de la oficina, incluidos Anguila. Dominica, Montserrat, St. Kitts y Nevis, Santa Lucía, Islas Turcas y Caicos, Islas Vírgenes (Reino Unido)',
        helpingHandText: 'Hola, ¡bienvenido a la línea de ayuda de MyChild!',
        writeYourMessage: 'Écrivez votre message ici...',

        // My Rights
        right1: 'Los niños tienen derecho a la vida, a la supervivencia y al desarrollo.',
        right2: 'Los niños tienen derecho a la protección contra todas las formas de discriminación.',
        right3: 'Los niños tienen derecho a ser escuchados y a participar en la toma de decisiones que les afecten.',
        right4: 'Los niños tienen derecho a un nombre y a una nacionalidad.',
        right5: 'Los niños tienen derecho a una identidad y deben ser protegidos contra cualquier forma de explotación.',
        right6: 'Los niños tienen derecho a la privacidad.',
        right7: 'Los niños tienen derecho a la libertad de expresión.',
        right8: 'Los niños tienen derecho a una vida familiar y a un entorno de apoyo.',
        right9: 'Los niños tienen derecho a la protección contra la violencia y la explotación.',
        right10:
            'Los niños tienen derecho a la protección contra el trabajo infantil.',
        right11:
            'Los niños tienen derecho a la protección contra el tráfico de niños.',
        right12:
            'Los niños tienen derecho a una vivienda, a alimentos suficientes y a seguridad social.',
        right13:
            'Los niños tienen derecho a la libertad de pensamiento, conciencia y religión.',
        right14:
            'Los niños tienen derecho a la libertad de asociación y reunión pacífica.',
        right15: 'Los niños tienen derecho a acceder a la educación.',
        right16:
            'Los niños tienen derecho a la protección contra el abuso y el maltrato.',
        right17: 'Los niños tienen derecho a la atención médica.',
        right18:
            'Los niños tienen derecho a una información adecuada y al acceso a los medios de comunicación.',
        right19:
            'Los niños tienen derecho a la protección contra la explotación sexual y el abuso.',
        right20:
            'Los niños tienen derecho a participar en actividades culturales y recreativas.',
        right21:
            'Los niños tienen derecho a la protección contra las consecuencias de los conflictos armados.',
        right22:
            'Los niños refugiados tienen derecho a la protección, ayuda y una educación adecuada.',
        right23:
            'Los niños con discapacidad tienen derecho a la inclusión en la sociedad.',
        right24:
            'Los niños tienen derecho a la nutrición, al agua potable y a un entorno limpio.',
        right25:
            'Los niños que viven lejos de su familia tienen derecho a ser colocados y a recibir seguimiento regular.',
        right26: 'Los gobiernos deben ayudar a los niños de familias pobres.',
        right27:
            'Los niños tienen derecho a una alimentación, ropa y un lugar de vida seguro.',
        right28:
            'Los niños tienen derecho a una educación gratuita y a una disciplina respetuosa.',
        right29:
            'La educación de los niños debe ayudarles a desarrollar su personalidad y sus talentos.',
        right30:
            'Los niños tienen derecho a usar su propio idioma, cultura y religión.',
        right31:
            'Los niños tienen derecho al descanso, al ocio y a participar en actividades creativas.',
        right32:
            'Los niños tienen derecho a la protección contra el trabajo peligroso y perjudicial para su desarrollo.',
        right33: 'Los gobiernos deben proteger a los niños del uso de drogas.',
        right34:
            'Los gobiernos deben proteger a los niños de la explotación sexual y la violencia.',
        right35:
            'Los gobiernos deben prevenir el secuestro y la trata de niños.',
        right36:
            'Los niños deben ser protegidos contra todas las formas de explotación, incluso aquellas no especificadas en la Convención.',
        right37:
            'Los niños acusados de delitos tienen derecho a asistencia legal y a un trato justo.',
        right38:
            'Los niños deben ser protegidos en tiempos de guerra. Ningún niño menor de 15 años debe estar involucrado en conflictos armados.',
        right39:
            'Los niños tienen derecho a recibir ayuda en caso de violencia, abuso o guerra.',
        right40:
            'Los niños acusados de delitos tienen derecho a ayuda legal y a un trato justo.',
        right41:
            'Si las leyes de un país protegen mejor los derechos de los niños que esta Convención, deben aplicarse esas leyes.',
        right42:
            'Los gobiernos deben informar a los niños y a los adultos sobre esta Convención para que todos sepan cuáles son los derechos de los niños.',
        right43:
            'Estos artículos explican cómo los gobiernos, las Naciones Unidas, incluido el Comité de los Derechos del Niño y UNICEF, y otras organizaciones trabajan para garantizar que todos los niños disfruten de todos sus derechos.',
        unlock: 'Desbloquear',
        areYouSureYouWantToDeleteAlNotes:
            '¿Estás seguro de que quieres eliminar todas las notas?',
        camera: 'Cámara',
        avatar: 'Avatar',
        chooseOption: 'Elige una opción',
        pleaseAuthenticateToContinue:
            'Como has activado la función de bloqueo de la aplicación, autentícate para continuar',

        enterText: 'Ingresar texto',
        enterNumber: 'Ingresar número',
        selectDate: 'Seleccionar fecha',
        selectedGender: 'Seleccionar género',
        selectLanguage: 'Seleccionar idioma',
        selectCountry: 'Seleccionar país',
        selectDistrict: 'Seleccionar distrito',
        selectMultipleReason: 'Seleccionar múltiples razones',
        typeHere: 'Escribe aquí...',
    },

    fr: {
        // Splash Screen
        myChild: 'MyChild',
        helpline: "Ligne d'assistance",
        inThePalmOfYourHands: '#danslapaumedevosmains',
        supportedBy: 'Soutenu par',

        // First Slide Screen
        firstSlideHello: 'Hello',
        welcomeTo: 'Bienvenue sur la',
        myChildHelpLine: "ligne d'assistance MyChild!",
        introductionFirstParagraph1: "Un espace sûr pour trouver de l'aide.",
        introductionFirstParagraph2: 'faisons un petit tour!',
        skipText: 'Sauter',
        doneText: 'Fait',

        // Second Slide Screen
        yourPrivacyMatters: 'Votre vie privée est importante',
        introductionSecondParagraph1:
            "Nous sommes là pour nous assurer que vous obtenez de l'aide en toute sécurité et en toute confidentialité",

        // Third Slide Screen
        youAreNotAlone: "Vous n'êtes pas seul(e)",
        introductionThirdParagraph1:
            "Besoin de quelqu'un pour écouter ? Vous pouvez réserver une séance de conseil pour vous aider.",

        // Register Screen
        letMeKnow: 'Faites-moi savoir!',
        language: 'Langue',
        gender: 'Genre',
        country: 'Pays',
        district: 'District',
        dob: 'Date de naissance',
        callName: 'Comment devrions-nous vous appeler ?',
        wantToSeeSelf: 'Comment veux-tu te voir?',
        chooseAvatar: 'Choisissez votre avatar',
        orText: 'ou',
        uploadImage: 'Téléchargez une image',
        concentDescription:
            "Les informations que vous saisissez sont sécurisées et nous permettent de vous fournir des services précis et spécifiques à chaque pays. Vous restez anonyme et seules vos données biologiques (c'est-à-dire votre âge, votre localisation et votre sexe) sont capturées sur notre système.",
        privacyContent: "J'ai lu, compris et accepté la ",
        privacyPolicy: 'Politique de confidentialité ',
        privacyAnd: 'et ',
        termConditions: 'Termes et conditions',
        nextText: 'Suivant',
        English: 'Anglais',
        Spanish: 'Espagnol',
        French: 'Français',
        Dutch: 'Néerlandais',
        Male: 'Homme',
        Female: 'Femme',
        Other: 'Autre',

        // Home Screen
        goodMorning: 'Bonjour',
        callus: 'Appelez-nous',
        Talktoone:
            'Parlez à l’un de nos auditeurs. C’est gratuit et confidentiel.',
        reqcoun: 'Demande de conseil',
        TalktooneListner: 'Besoin d’aide ? Demandez une session de conseil ici',
        mydiary: 'Mon journal',
        mydiaryText: 'Enregistrez tout dans votre propre journal personnel.',
        mychillspot: 'Mon coin détente',
        mychillspotText: 'Détendez-vous et rafraîchissez-vous !',
        arcade: 'Arcade',
        arcadeText:
            'Vous avez du temps libre ? Jouez à l’un de nos jeux classiques.',
        mentalHealth: 'Texte U-Matter sur la santé mentale',
        mentalHealthText:
            'Vous avez quelque chose à dire ? Commencez à discuter maintenant !',

        // Emoji Modal
        howYouFeel: 'Comment te sens-tu aujourd’hui ?',
        Happy: 'Heureux',
        Excited: 'Excité',
        Loved: 'Aimé',
        Sad: 'Triste',
        Angry: '#Angry',
        Depressed: 'Déprimé(e)',
        Stressed: 'Stressé(e)',
        Guilty: 'Coupable',
        Lonely: 'Solitaire',
        Resilient: 'Résilient',
        Hurt: '#Hurt',

        // Emoji Second Modal
        feeling: 'Se sentir',
        hello: 'Bonjour',
        goodnews: 'Cest une merveilleuse nouvelle !',

        //Information kiosk page
        informationkiosk: 'Kiosque d’information',
        yourdestination:
            'Votre destination unique pour des conseils et une assistance!',
        myrights: 'Mes droits',
        ourrights: 'Vous voulez connaître vos droits ?',
        parentinghub: 'Le Hub des Parents',
        parentingtitle: 'Conseils, idées et faits utiles pour les parents.',
        gosservices: 'Services publics',
        gosservicessubtitle:
            'L’application MyChild Helpline est soutenue par les services publics d’Anguilla. Cliquez ici pour visiter.',
        resources: 'Ressources',
        resourcessubtitle: 'Votre source ultime d’aide et de renseignements !',
        helpinghand: 'Main tendue',
        mychildhelpline: 'MyChild Helpline',
        mychildhelplinesubtitle: "Région des Caraïbes orientales de l'UNICEF",
        UNICEF: 'UNICEF Zone des Caraïbes orientales',
        UNICEFsubtitle:
            'L’application MyChild Helpline est soutenue par l’UNICEF. Appuyez pour visiter UNICEF.',
        infokiosk: 'Kiosque d’informations',
        myspace: 'Mon Espace',
        fillFormLine:
            'Remplissez le formulaire ci-dessous pour réserver votre consultation.',
        appointmentDate: 'Date de nomination',
        reasonForCounselling:
            'Qu’est-ce qui vous a amené à demander des conseils ?',
        reasonsSelected: 'Raisons sélectionnées',
        reasonSelected: 'Raison sélectionnée',
        firstName: 'Prénom',
        lastName: 'Nom de famille',
        telephoneNumber: 'Numéro de téléphone',
        message: 'Message',
        loading: 'Chargement...',
        bookCounselling: 'Réservez votre consultation',
        cancel: 'Annuler',
        share: 'Partager',
        delete: 'Supprimer',
        yourDiaryIsEmpty: 'Votre journal est vide',
        whyNotAddEntry: 'Pourquoi ne pas ajouter une entrée ?',
        addEntry: 'Ajouter une entrée',
        updateEntry: 'Mettre à jour l’entrée',
        title: 'Titre',
        startWriting: 'Commencez à écrire',
        save: 'Sauvegarder',
        update: 'Mettre à jour',
        close: 'Fermer',
        welcomeMessage:
            'Bienvenue dans votre Coin Détente ! Prenez quelques instants pour vous détendre.',
        breath: 'Respirez',
        counting: 'Comptez jusqu’à 10',
        welcomeArcade:
            'Bienvenue dans l’arcade ! L’arcade est maintenant ouverte. Jouez à l’un de nos jeux classiques.',
        tictactoe: 'Tic Tac Toe',
        puzzle: 'Puzzle',
        bounce: 'Bounce',
        ok: 'OK',
        chatline: 'ChatLine',
        name: 'Nom',
        email: 'Email',
        contact: 'Contact',
        Enteryouremail: 'Entrez votre e-mail',
        Enteryourcontact: 'Entrez votre numéro de contact',
        Enteryourmessage: 'Entrez votre message',
        successFeedback: 'Merci pour vos retours, votre avis est précieux !',
        errorFeedback:
            'Échec de l’envoi du retour, veuillez réessayer plus tard.',
        userDetailsError: 'Détails utilisateur non trouvés',
        invalidEmailError: 'Veuillez fournir un e-mail valide !',
        invalidContactError:
            'Le numéro de contact doit comporter au moins 10 chiffres !',
        emptyNameError: 'Le nom ne peut pas être vide !',
        emptyMessageError: 'Le message ne peut pas être vide',
        updateprofile: 'Mettez à jour votre profil',
        givefeedback: 'Donnez-nous vos retours',
        fontfamily: 'Famille de polices',
        lineheight: 'Hauteur de ligne',
        text: 'Texte',
        accessibility: 'Accessibilité',
        broadcastmsg: 'Messages diffusés',
        customizeyouravatar: 'Personnalisez votre avatar',
        peekabool:
            "Peek-a-bool Hé.. Je m'appelle Helping Hand. Je suis heureux que vous me rejoigniez pour en savoir plus sur vos droits en tant qu'enfant. Quels sont ces droits ?",
        childrightstext:
            "Chaque enfant a des droits. Les droits sont ce que vous devez avoir ou pouvoir faire pour avoir le meilleur départ dans la vie. Ces droits sont énumérés dans la Convention des Nations Unies relative aux droits de l'enfant. Ils sont destinés à tous les enfants de moins de 18 ans, dans toutes les régions du monde. Tous les droits sont également importants et sont liés entre eux. Vous êtes né avec ces droits et personne ne peut vous les retirer.",
        knowrights:
            'Connaître vos droits ! Découvrez comment ils vous protègent et vous donnent du pouvoir.',
        letsgo: 'Allons-y!',
        pause: 'Pause',
        play: 'Jouer',
        nodescription: 'Aucune description.',
        datacollectionpolicy: 'Politique de collecte des données',
        datasharingpolicy: 'Politique de partage des données',
        privacypolicy: 'Politique de confidentialité',
        call: 'Appeler',
        website: 'Site web',
        location: 'Emplacement',
        confirmdeletion: 'Confirmer la suppression',
        confirmdeletionmsg:
            'Êtes-vous sûr de vouloir supprimer votre compte ? Cette action ne peut pas être annulée.',
        settings: 'Paramètres',
        diarylock: 'Activer le verrouillage du journal',
        applock: 'Activer le verrouillage de l’application',
        policies: 'politiques',
        faqs: 'FAQs',
        howtousetheapp: 'Comment utiliser l’application',
        feedback: 'Retour',
        deleteaccount: 'Supprimer le compte',
        about: 'À propos',
        aboutMyChildHelpline: 'À propos',
        registeredsuccessfully: 'Enregistrement réussi',
        success: 'Succès',
        selectLanguageError: 'Veuillez sélectionner votre langue !',
        selectGenderError: 'Veuillez sélectionner votre genre !',
        selectCountryError: 'Veuillez sélectionner votre pays !',
        selectDistrictError: 'Veuillez sélectionner votre district !',
        selectDobError: 'Veuillez sélectionner votre date de naissance !',
        ageTooYoungError: 'L’âge doit être supérieur à 2 ans !',
        ageTooOldError: 'L’âge ne peut pas être supérieur à 90 ans !',
        enterNameError: 'Veuillez entrer votre nom !',
        registrationSuccess: 'Enregistrement réussi',
        serverError:
            'L’enregistrement a échoué en raison d’une erreur serveur.',
        noServerResponseError:
            'Aucune réponse du serveur. Veuillez réessayer plus tard.',
        unexpectedError:
            'Une erreur inattendue est survenue. Veuillez réessayer.',
        appointmentDateError: 'La date du rendez-vous est requise',
        selectReasonError: 'Veuillez sélectionner une raison',
        enterFirstNameError: 'Veuillez entrer votre prénom',
        enterLastNameError: 'Veuillez entrer votre nom de famille',
        enterTelephoneError: 'Veuillez entrer un numéro de téléphone valide',
        invalidTelephoneError: 'Veuillez entrer un numéro de téléphone valide',
        enterMessageError: 'Veuillez entrer un message',
        counsellingSuccessTitle: 'Merci d’avoir demandé une consultation',
        counsellingSuccessMessage:
            'Votre demande a été soumise avec succès. Un conseiller vous contactera sous peu. Merci de nous avoir contacté !',
        okButton: "D'accord",
        profileUpdateSuccess: 'Profil mis à jour avec succès',
        dyslexiaFriendly: 'Compatibilité dyslexie',
        biggerText: 'Texte plus grand',
        lineHeight: 'Hauteur de ligne',
        textSpacing: 'Espacement du texte',
        unicefText:
            "En 2021, le Bureau de l'UNICEF pour la région des Caraïbes orientales (ECA) a repensé l'application MyChildLine soutenue par l'UNICEF à Trinité-et-Tobago, désormais appelée « Application MyChiId Helpline » pour couvrir quatre (4) pays : Antigua-et-Barbuda, la Barbade, Grenade et Saint-Vincent. et les Grenadines. En 2023, l'application est désormais disponible dans les douze (12) pays et territoires d'outre-mer couverts par le programme multi-pays du bureau, y compris Anguilla, Dominique, Montserrat, Saint-Kitts-et-Nevis, Sainte-Lucie, îles Turques et Caïques, îles Vierges (Royaume-Uni)",
        helpingHandText:
            "Bonjour, bienvenue sur la ligne d'assistance MyChild !",
        writeYourMessage: 'Write your message here...',

        // My Rights

        right1: 'Les enfants ont droit à la vie, à la survie et au développement.',
        right2: 'Les enfants ont droit à la protection contre toutes formes de discrimination.',
        right3: "Les enfants ont le droit d'être écoutés et de participer à la prise de décisions qui les concernent.",
        right4: 'Les enfants ont droit à un nom et à une nationalité.',
        right5: "Les enfants ont droit à une identité, et ils doivent être protégés contre toute forme d'exploitation.",
        right6: 'Les enfants ont droit à la vie privée.',
        right7: "Les enfants ont le droit à la liberté d'expression.",
        right8: 'Les enfants ont droit à une vie familiale et à un environnement de soutien.',
        right9: "Les enfants ont droit à la protection contre la violence et l'exploitation.",
        right10:
            'Les enfants ont droit à la protection contre le travail des enfants.',
        right11:
            "Les enfants ont droit à une protection contre le trafic d'enfants.",
        right12:
            'Les enfants ont droit à un logement, à un aliment suffisant et à une sécurité sociale.',
        right13:
            'Les enfants ont droit à la liberté de pensée, de conscience et de religion.',
        right14:
            "Les enfants ont droit à la liberté d'association et de réunion pacifique.",
        right15: "Les enfants ont droit à un accès à l'éducation.",
        right16:
            'Les enfants ont droit à la protection contre la maltraitance.',
        right17: 'Les enfants ont droit à des soins de santé.',
        right18:
            "Les enfants ont droit à une information appropriée et à l'accès aux médias.",
        right19:
            "Les enfants ont droit à la protection contre l'exploitation sexuelle et l'abus.",
        right20:
            'Les enfants ont droit à la participation à des activités culturelles et récréatives.',
        right21:
            'Les enfants ont droit à la protection contre les conséquences des conflits armés.',
        right22:
            "Les enfants réfugiés ont droit à la protection, à l'aide et à une éducation appropriée.",
        right23:
            "Les enfants handicapés ont droit à l'inclusion dans la société.",
        right24:
            "Les enfants ont droit à la nutrition, à l'eau potable et à un environnement propre.",
        right25:
            'Les enfants vivant loin de leur famille ont droit à un placement et à un suivi réguliers.',
        right26:
            'Les gouvernements doivent aider les enfants provenant de familles pauvres.',
        right27:
            'Les enfants ont droit à une alimentation, à des vêtements et à un lieu de vie sûrs.',
        right28:
            'Les enfants ont droit à une éducation gratuite et à une discipline respectueuse.',
        right29:
            "L'éducation des enfants doit les aider à développer leurs personnalités et talents.",
        right30:
            "Les enfants ont le droit d'utiliser leur propre langue, culture et religion.",
        right31:
            'Les enfants ont droit au repos, à la détente et à la participation à des activités créatives.',
        right32:
            'Les enfants ont droit à la protection contre le travail dangereux et nuisible à leur développement.',
        right33:
            "Les gouvernements doivent protéger les enfants de l'usage des drogues.",
        right34:
            "Les gouvernements doivent protéger les enfants de l'exploitation sexuelle et de la violence.",
        right35:
            "Les gouvernements doivent empêcher les enlèvements d'enfants et la traite.",
        right36:
            "Les enfants doivent être protégés de toutes formes d'exploitation, même si elles ne sont pas spécifiées dans la Convention.",
        right37:
            'Les enfants accusés de crimes doivent avoir droit à une assistance juridique et à un traitement équitable.',
        right38:
            'Les enfants doivent être protégés pendant les guerres. Aucun enfant de moins de 15 ans ne doit être impliqué dans des conflits armés.',
        right39:
            "Les enfants ont droit à de l'aide en cas de violence, de maltraitance ou de guerre.",
        right40:
            'Les enfants accusés de crimes ont droit à une aide légale et à un traitement juste.',
        right41:
            "Si les lois d'un pays protègent mieux les droits des enfants que cette Convention, ces lois doivent s'appliquer.",
        right42:
            'Les gouvernements doivent informer les enfants et les adultes de cette Convention pour que tout le monde sache quels sont les droits des enfants.',
        right43:
            "Ces articles expliquent comment les gouvernements, les Nations Unies - y compris le Comité des droits de l'enfant et l'UNICEF - et d'autres organisations travaillent pour s'assurer que tous les enfants jouissent de tous leurs droits.",
        unlock: 'Déverrouiller',
        areYouSureYouWantToDeleteAlNotes:
            'Êtes-vous sûr de vouloir supprimer toutes les notes ?',
        camera: 'Caméra',
        avatar: 'Avatar',
        chooseOption: 'Choisissez une option',
        pleaseAuthenticateToContinue:
            "Comme vous avez activé la fonction de verrouillage de l'application, veuillez vous authentifier pour continuer",
        enterText: 'Entrer du texte',
        enterNumber: 'Entrer un nombre',
        selectDate: 'Sélectionner la date',
        selectedGender: 'Sélectionner le genre',
        selectLanguage: 'Sélectionner la langue',
        selectCountry: 'Sélectionner le pays',
        selectDistrict: 'Sélectionner le district',
        selectMultipleReason: 'Sélectionner plusieurs raisons',
        typeHere: 'Tapez ici...',
    },

    nl: {
        // Splash Screen
        myChild: 'MijnKind',
        helpline: 'Hulplijn',
        inThePalmOfYourHands: '#indepalmvanjehanden',
        supportedBy: 'Ondersteund door',

        // First Slide Screen
        firstSlideHello: 'Hello',
        welcomeTo: 'Welkom bij',
        myChildHelpLine: 'MyChild HelpLine!',
        introductionFirstParagraph1: 'Een veilige plek om hulp te vinden.',
        introductionFirstParagraph2: 'laten we een korte rondleiding maken!',
        skipText: 'Overslaan',
        doneText: 'Klaar',

        // Second Slide Screen
        yourPrivacyMatters: 'Uw privacy is belangrijk',
        introductionSecondParagraph1:
            'Wij zijn er om ervoor te zorgen dat u veilig en vertrouwelijk hulp krijgt',

        // Third Slide Screen
        youAreNotAlone: 'Je bent niet alleen',
        introductionThirdParagraph1:
            'Heb je iemand nodig die luistert? Om u te helpen kunt u een adviesgesprek boeken.',

        // Register Screen
        letMeKnow: 'Laat mij jou kennen!',
        language: 'Taal',
        gender: 'Geslacht',
        country: 'Land',
        district: 'Wijk',
        dob: 'Geboortedatum',
        callName: 'Hoe moeten we je noemen?',
        wantToSeeSelf: 'Hoe wil jij jezelf zien ?',
        chooseAvatar: 'Kies je avatar',
        orText: 'of',
        uploadImage: 'Upload een afbeelding',
        concentDescription:
            'De informatie die u invoert is veilig en stelt ons in staat u nauwkeurige, landspecifieke diensten te bieden. U blijft anoniem en alleen uw biologische gegevens (d.w.z. leeftijd, locatie en geslacht) worden op ons systeem vastgelegd.',
        privacyContent: 'Ik heb de ',
        privacyPolicy: 'Privacyverklaring ',
        privacyAnd: 'en ',
        termConditions:
            'Algemene voorwaarden gelezen, begrepen en geaccepteerd',
        nextText: 'Volgende',
        English: 'Engels',
        Spanish: 'Spaans',
        French: 'Frans',
        Dutch: 'Nederlands',
        Male: 'Man',
        Female: 'Vrouw',
        Other: 'Anders',

        // Home Screen
        goodMorning: 'Goedemorgen',
        callus: 'Bel ons',
        Talktoone:
            'Praat met een van onze luisteraars. Het is gratis en vertrouwelijk.',
        reqcoun: 'Verzoek om begeleiding',
        TalktooneListner: 'Hulp nodig? Vraag hier een counseling sessie aan',
        mydiary: 'Mijn Dagboek',
        mydiaryText: 'Noteer alles in uw eigen persoonlijke dagboek.',
        mychillspot: 'Mijn chillplek',
        mychillspotText: 'Ontspan en verfris jezelf!',
        arcade: 'Arcade',
        arcadeText:
            'Heb je wat vrije tijd? Speel een van onze klassieke spellen.',
        mentalHealth: 'U-Matter Mental Health Textline',
        mentalHealthText: 'Heeft u iets te zeggen? Begin nu met chatten!',

        // Emoji Modal
        howYouFeel: 'Hoe voel je je vandaag?',
        Happy: 'Vrolijk',
        Excited: 'Opgewonden',
        Loved: 'Geliefd',
        Sad: 'Triest',
        Angry: '#Angry',
        Depressed: 'Depressief',
        Stressed: 'Benadrukt',
        Guilty: 'Schuldig',
        Lonely: 'Alleen',
        Resilient: 'Veerkrachtig',
        Hurt: '#Hurt',

        // Emoji Second Modal
        feeling: 'Je gelukkig',
        hello: 'Hallo',
        goodnews: 'Dat is prachtig nieuws!',

        //Information kiosk page
        informationkiosk: 'Informatiekiosk',
        yourdestination: 'Uw one-stop-bestemming voor begeleiding en hulp!',
        myrights: 'Mijn Rechten',
        ourrights: 'Wil je je rechten weten?',
        parentinghub: 'De Ouderhub',
        parentingtitle: 'Handige tips, inzichten en feiten voor ouders.',
        gosservices: 'Overheidsdiensten',
        gosservicessubtitle:
            'De MyChild Helpline app wordt ondersteund door overheidsdiensten van Anguilla. Klik hier om te bezoeken.',
        resources: 'Hulpmiddelen',
        resourcessubtitle: 'Jouw ultieme bron voor hulp en inzichten!',
        helpinghand: '#HelpendeHand',
        mychildhelpline: 'MyChild Helpline',
        mychildhelplinesubtitle: 'Klik hier voor meer informatie over de app.',
        UNICEF: 'UNICEF Oost-Caribisch Gebied',
        UNICEFsubtitle:
            'De MyChild Helpline app wordt ondersteund door UNICEF. Klik hier om UNICEF te bezoeken.',
        infokiosk: 'Informatiekiosk',
        myspace: 'Mijn Ruimte',
        fillFormLine:
            'Vul het onderstaande formulier in om je counseling te boeken.',
        appointmentDate: 'Datum afspraak*',
        reasonForCounselling: 'Waarom vraag je om counseling?',
        reasonsSelected: 'Geselecteerde Redenen',
        reasonSelected: 'Geselecteerde Reden',
        firstName: 'Voornaam',
        lastName: 'Achternaam',
        telephoneNumber: 'Telefoonnummer',
        message: 'Bericht',
        loading: 'Laden...',
        bookCounselling: 'Boek je Counseling',
        cancel: 'Annuleren',
        share: 'Delen',
        delete: 'Verwijderen',
        yourDiaryIsEmpty: 'Je dagboek is leeg',
        whyNotAddEntry: 'Waarom voeg je geen bericht toe?',
        addEntry: 'Voeg Bericht Toe',
        updateEntry: 'Update Bericht',
        title: 'Titel',
        startWriting: 'Begin met schrijven',
        save: 'Opslaan',
        update: 'Bijwerken',
        close: 'Sluiten',
        welcomeMessage:
            'Welkom op jouw Chillspot! Neem even de tijd om te ontspannen.',
        breath: 'Adem in',
        counting: 'Tel tot 10',
        welcomeArcade:
            'Welkom bij de arcade! De arcade is nu open. Speel een van onze klassieke spellen.',
        tictactoe: 'Tic Tac Toe',
        puzzle: 'Puzzel',
        bounce: 'Bounce',
        ok: 'OK',
        chatline: 'Chatline',
        name: 'Naam',
        email: 'E-mail',
        contact: 'Contact',
        Enteryouremail: 'Voer je e-mail in',
        Enteryourcontact: 'Voer je contactnummer in',
        Enteryourmessage: 'Voer je bericht in',
        successFeedback: 'Bedankt voor je feedback, je feedback is waardevol!',
        errorFeedback: 'Feedback niet verzonden, probeer het later opnieuw.',
        userDetailsError: 'Gebruikersgegevens niet gevonden',
        invalidEmailError: 'Geef een geldig e-mailadres op!',
        invalidContactError: 'Contactnummer moet minstens 10 cijfers bevatten!',
        emptyNameError: 'Naam mag niet leeg zijn!',
        emptyMessageError: 'Bericht mag niet leeg zijn',
        updateprofile: 'Werk je profiel bij',
        givefeedback: 'Geef ons Feedback',
        fontfamily: 'Lettertype',
        lineheight: 'Regelhoogte',
        text: 'Tekst',
        accessibility: 'Toegankelijkheid',
        broadcastmsg: 'Uitgezonden Berichten',
        customizeyouravatar: 'Pas je avatar aan',
        peekabool:
            'Peek-a-bool Hé.. Mijn naam is Helpende Hand. Ik ben blij dat je me hebt gevonden om meer te leren over je rechten als kind. Wat zijn deze rechten?',
        childrightstext:
            'Ieder kind heeft rechten. Rechten zijn wat je zou moeten hebben of kunnen doen om de beste start in het leven te hebben. Deze rechten staan ​​vermeld in het VN-verdrag inzake de rechten van het kind. Ze zijn voor alle kinderen onder de 18 jaar, waar ook ter wereld. Alle rechten zijn even belangrijk en hangen met elkaar samen. Je wordt geboren met deze rechten en niemand kan ze je afnemen',
        knowrights:
            'Ken je rechten! Ontdek hoe ze je beschermen en kracht geven.',
        letsgo: 'Laten we gaan',
        pause: 'Pauze',
        play: 'Toneelstuk',
        nodescription: 'Geen beschrijving beschikbaar.',
        datacollectionpolicy: 'Beleid voor gegevensverzameling',
        datasharingpolicy: 'Beleid voor gegevensdeling',
        privacypolicy: 'Privacybeleid',
        call: 'Bel',
        website: 'Website',
        location: 'Locatie',
        confirmdeletion: 'Bevestig Verwijdering',
        confirmdeletionmsg:
            'Weet je zeker dat je je account wilt verwijderen? Deze actie kan niet ongedaan worden gemaakt.',
        settings: 'Instellingen',
        diarylock: 'Schakel Dagboekvergrendeling in',
        applock: 'Schakel Appvergrendeling in',
        policies: 'Beleidsmaatregelen',
        faqs: 'Veelgestelde Vragen',
        howtousetheapp: 'Hoe gebruik je de app',
        feedback: 'Feedback',
        deleteaccount: 'Verwijder Account',
        about: 'Over',
        aboutMyChildHelpline: 'Over',
        registeredsuccessfully: 'Succesvol geregistreerd',
        success: 'Succes',
        selectLanguageError: 'Selecteer je taal!',
        selectGenderError: 'Selecteer je geslacht!',
        selectCountryError: 'Selecteer je land!',
        selectDistrictError: 'Selecteer je district!',
        selectDobError: 'Selecteer je geboortedatum!',
        ageTooYoungError: 'Leeftijd moet meer dan 2 jaar zijn!',
        ageTooOldError: 'Leeftijd kan niet meer dan 90 jaar zijn!',
        enterNameError: 'Voer je naam in!',
        registrationSuccess: 'Succesvol geregistreerd',
        serverError: 'Registratie mislukt door serverfout.',
        noServerResponseError:
            'Geen reactie van de server. Probeer het later opnieuw.',
        unexpectedError:
            'Er is een onverwachte fout opgetreden. Probeer het opnieuw.',
        appointmentDateError: 'Afspraakdatum is vereist',
        selectReasonError: 'Selecteer een reden',
        enterFirstNameError: 'Voer je voornaam in',
        enterLastNameError: 'Voer je achternaam in',
        enterTelephoneError: 'Voer een geldig telefoonnummer in',
        invalidTelephoneError: 'Voer een geldig telefoonnummer in',
        enterMessageError: 'Voer bericht in',
        counsellingSuccessTitle: 'Bedankt voor het aanvragen van counseling',
        counsellingSuccessMessage:
            'Je aanvraag is succesvol ingediend. Een counselor neemt binnenkort contact met je op. Bedankt voor het bereiken van ons!',
        okButton: 'Oké',
        profileUpdateSuccess: 'Profiel succesvol bijgewerkt',
        dyslexiaFriendly: 'Dyslexievriendelijk',
        biggerText: 'Grotere Tekst',
        lineHeight: 'Regelhoogte',
        textSpacing: 'Tekst Spatiëring',
        unicefText:
            'In 2021 heeft UNICEF Office for the Eastern Caribbean Area (ECA) de door UNICEF ondersteunde MyChildLine-app van Trinidad en Tobago, nu "MyChiId Helpline-app" genoemd, opnieuw ontworpen voor vier (4) landen Antigua en Barbuda, Barbados, Grenada en St. Vincent en de Grenadines In 2023 is de app nu beschikbaar voor alle twaalf (12) landen en overzeese gebiedsdelen die onder het meerlandenprogramma van het kantoor vallen. inclusief Anguilla, Dominica, Montserrat, St. Kitts en Nevis, St. Lucia, Turks- en Caicoseilanden, Maagdeneilanden (VK)',
        helpingHandText: 'Hallo, welkom bij de MyChild-hulplijn!',
        writeYourMessage: 'Schrijf hier je bericht...',

        // My Rights

        right1: 'Kinderen hebben recht op leven, overleving en ontwikkeling.',
        right2: 'Kinderen hebben recht op bescherming tegen alle vormen van discriminatie.',
        right3: 'Kinderen hebben recht om gehoord te worden en deel te nemen aan beslissingen die hen aangaan.',
        right4: 'Kinderen hebben recht op een naam en nationaliteit.',
        right5: 'Kinderen hebben recht op identiteit en moeten worden beschermd tegen alle vormen van uitbuiting.',
        right6: 'Kinderen hebben recht op privacy.',
        right7: 'Kinderen hebben recht op vrijheid van meningsuiting.',
        right8: 'Kinderen hebben recht op een gezinsleven en een ondersteunende omgeving.',
        right9: 'Kinderen hebben recht op bescherming tegen geweld en uitbuiting.',
        right10: 'Kinderen hebben recht op bescherming tegen kinderarbeid.',
        right11: 'Kinderen hebben recht op bescherming tegen kinderhandel.',
        right12:
            'Kinderen hebben recht op huisvesting, voldoende voedsel en sociale zekerheid.',
        right13:
            'Kinderen hebben recht op vrijheid van gedachte, geweten en religie.',
        right14:
            'Kinderen hebben recht op vrijheid van vereniging en vreedzaam bijeenkomen.',
        right15: 'Kinderen hebben recht op toegang tot onderwijs.',
        right16:
            'Kinderen hebben recht op bescherming tegen misbruik en verwaarlozing.',
        right17: 'Kinderen hebben recht op medische zorg.',
        right18:
            'Kinderen hebben recht op toegang tot informatie en massamedia.',
        right19:
            'Kinderen hebben recht op bescherming tegen seksuele uitbuiting en misbruik.',
        right20:
            'Kinderen hebben recht om deel te nemen aan culturele en recreatieve activiteiten.',
        right21:
            'Kinderen hebben recht op bescherming tegen de gevolgen van gewapende conflicten.',
        right22:
            'Refugeekinderen hebben recht op bescherming, hulp en passend onderwijs.',
        right23:
            'Kinderen met een handicap hebben recht op maatschappelijke inclusie.',
        right24:
            'Kinderen hebben recht op voeding, schoon water en een schone omgeving.',
        right25:
            'Kinderen die ver weg van hun familie wonen, hebben recht op plaatsing en regelmatige opvolging.',
        right26: 'Overheden moeten kinderen uit arme gezinnen helpen.',
        right27:
            'Kinderen hebben recht op voeding, kleding en een veilige woonplaats.',
        right28:
            'Kinderen hebben recht op gratis onderwijs en respectvolle discipline.',
        right29:
            'Het onderwijs van kinderen moet hen helpen hun persoonlijkheid en talenten te ontwikkelen.',
        right30:
            'Kinderen hebben recht om hun eigen taal, cultuur en religie te gebruiken.',
        right31:
            'Kinderen hebben recht op rust, vrije tijd en deelname aan creatieve activiteiten.',
        right32:
            'Kinderen hebben recht op bescherming tegen gevaarlijk werk dat schadelijk is voor hun ontwikkeling.',
        right33: 'Overheden moeten kinderen beschermen tegen drugsgebruik.',
        right34:
            'Overheden moeten kinderen beschermen tegen seksuele uitbuiting en geweld.',
        right35:
            'Overheden moeten kinderen beschermen tegen ontvoering en mensenhandel.',
        right36:
            'Kinderen moeten worden beschermd tegen alle vormen van uitbuiting, ook die welke niet specifiek in het Verdrag worden genoemd.',
        right37:
            'Kinderen die beschuldigd worden van misdrijven hebben recht op juridische bijstand en eerlijke behandeling.',
        right38:
            'Kinderen moeten beschermd worden in tijden van oorlog. Geen kind onder de 15 jaar mag betrokken zijn bij gewapende conflicten.',
        right39:
            'Kinderen hebben recht op hulp in geval van geweld, misbruik of oorlog.',
        right40:
            'Kinderen die beschuldigd worden van misdrijven hebben recht op juridische bijstand en eerlijke behandeling.',
        right41:
            'Als de wetten van een land de rechten van kinderen beter beschermen dan dit Verdrag, moeten die wetten worden toegepast.',
        right42:
            'Overheden moeten kinderen en volwassenen informeren over dit Verdrag, zodat iedereen weet wat de rechten van kinderen zijn.',
        right43:
            'Deze artikelen leggen uit hoe regeringen, de Verenigde Naties, inclusief het Comité voor de Rechten van het Kind en UNICEF, en andere organisaties werken om ervoor te zorgen dat alle kinderen van al hun rechten genieten.',
        unlock: 'Ontgrendelen',
        areYouSureYouWantToDeleteAlNotes:
            'Weet je zeker dat je alle notities wilt verwijderen?',
        camera: 'Camera',
        avatar: 'Avatar',
        chooseOption: 'Kies optie',
        pleaseAuthenticateToContinue:
            'Omdat u de app-vergrendelingsfunctie heeft ingeschakeld, authenticeer om door te gaan',
        enterText: 'Voer tekst in',
        enterNumber: 'Voer een nummer in',
        selectDate: 'Selecteer datum',
        selectedGender: 'Selecteer geslacht',
        selectLanguage: 'Selecteer taal',
        selectCountry: 'Selecteer land',
        selectDistrict: 'Selecteer district',
        selectMultipleReason: 'Selecteer meerdere redenen',
        typeHere: 'Typ hier...',
    },
})

export default localization
