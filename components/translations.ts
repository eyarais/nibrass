export type Lang = "ar" | "fr";

export const languages = {
  ar: { label: "العربية", dir: "rtl" },
  fr: { label: "Français", dir: "ltr" }
} as const;

export const translations = {
  ar: {
    nav: {
      home: "الرئيسية",
      programs: "البرامج",
      why: "لماذا نبراس",
      testimonials: "آراء الأولياء",
      contact: "تواصل",
      cta: "احجز حصة"
    },
    hero: {
      badge: "أكاديمية تعليم عن بعد",
      title: "رحلة ممتعة مع القرآن والسيرة",
      subtitle:
        "نساعد الأطفال على تعلم القرآن الكريم والسيرة النبوية بأسلوب ممتع وتفاعلي يناسب أعمارهم ويزرع حب الإسلام في قلوبهم.",
      primary: "احجز حصة تجريبية",
      secondary: "تعرف علينا",
      logoAlt: "شعار أكاديمية نبراس"
    },
    about: {
      eyebrow: "لماذا نبراس؟",
      title: "تعلم من أي مكان, ممتع، وقريب من قلب الطفل",
      intro: "نبراس تعني الفانوس الذي ينير، ونحن نصمم كل حصة لتكون نورا صغيرا في يوم الطفل.",
      cards: [
        ["تعليم ممتع", "نعتمد على الأنشطة والتفاعل لجعل التعلم تجربة محببة."],
        ["مجموعات صغيرة", "عدد قليل من الطلاب لضمان المتابعة الفردية."],
        ["معلمون مؤهلون", "معلمون ذوو خبرة في تعليم الأطفال."],
        ["متابعة مستمرة", "تقارير دورية للحضور والتقدم."]
      ]
    },
    programs: {
      eyebrow: "برامجنا",
      title: "مسارات واضحة تناسب عمر الطفل ومستواه",
      items: [
        { title: "القرآن الكريم", icon: "BookOpen", points: ["حفظ", "مراجعة", "تلاوة", "تجويد"] },
        { title: "السيرة النبوية", icon: "Moon", points: ["قصص تفاعلية", "مواقف تربوية", "الاقتداء بالنبي ﷺ"] },
        { title: "قريبا", icon: "Sparkles", points: ["العربية", "الآداب الإسلامية", "التاريخ الإسلامي"] }
      ]
    },
    classes: {
      eyebrow: "طريقة الدراسة",
      title: "من التسجيل إلى المتابعة بخطوات بسيطة",
      steps: ["التسجيل", "اختبار المستوى", "الانضمام إلى المجموعة", "التعلم والمتابعة"],
      note: "دروس مباشرة عبر Zoom مع أنشطة قصيرة، أسئلة، ومراجعة مناسبة لعمر الطفل."
    },
    testimonials: {
      eyebrow: "آراء الأولياء",
      title: "ثقة تبنى حصة بعد حصة",
      items: [
        ["أم مريم", "أصبحت ابنتي تنتظر حصة القرآن بشوق، والطريقة لطيفة جدا مع الأطفال."],
        ["والد ياسين", "المجموعة صغيرة والمتابعة واضحة، لاحظنا تحسنا في التلاوة خلال أسابيع."],
        ["أم آدم", "أحببت ربط السيرة بالقيم اليومية بطريقة يفهمها الطفل ويطبقها."]
      ]
    },
    cta: {
      title: "ابدأ رحلة طفلك مع القرآن اليوم",
      button: "احجز حصتك التجريبية المجانية"
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "نرحب بأسئلتك ونساعدك في اختيار المجموعة المناسبة",
      whatsapp: "WhatsApp: +216 26 616 540",
      email: "contact@nibras.tn",
      facebook: "Nibras Academy"
    },
    form: {
      title: "احجز حصة تجريبية",
      intro: "املأ البيانات وسنتواصل معك لاختيار الوقت المناسب.",
      firstName: "الاسم",
      lastName: "اللقب",
      phone: "رقم الهاتف",
      dateOfBirth: "تاريخ الولادة",
      subject: "المادة",
      freeTimes: "الأوقات المتاحة",
      comments: "ملاحظات أخرى",
      firstNamePlaceholder: " الاسم",
      lastNamePlaceholder:"اللقب",
      phonePlaceholder: "مثال: 26616540",
      phoneHint: "يجب أن يتكوّن رقم الهاتف من 8 أرقام.",
      subjectPlaceholder: "اختر المادة",
      freeTimesPlaceholder: "مثال: السبت 19 مساء, الأحد صباحا",
      commentsPlaceholder: "أي تفاصيل تساعدنا على اختيار المجموعة المناسبة",
      submit: "إرسال الطلب",
      sending: "جار الإرسال...",
      close: "إغلاق",
      success: "تم ارسال طلبك سنتواصل معك قريبا",
      error: "تعذر إرسال الطلب الآن. يرجى المحاولة لاحقا.",
      subjects: ["القرآن الكريم", , "السيرة النبوية","اقتراح أخر"]
    },
    footer: {
      description: "نبراس أكاديمية تعليمية تسعى لغرس حب القرآن والسيرة في نفوس الأطفال بأسلوب ممتع وهادف.",
      copyright: "جميع الحقوق محفوظة."
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      programs: "Programmes",
      why: "Pourquoi Nibras",
      testimonials: "Témoignages",
      contact: "Contact",
      cta: "Réserver"
    },
    hero: {
      badge: "Académie islamique en ligne pour enfants",
      title: "Un voyage joyeux avec le Coran et la Sira",
      subtitle:
        "Nous aidons les enfants à apprendre le Coran et la Sira du Prophète avec une méthode ludique, interactive et adaptée à leur âge.",
      primary: "Réserver un cours d'essai",
      secondary: "Découvrir Nibras",
      logoAlt: "Logo de l'Académie Nibras"
    },
    about: {
      eyebrow: "Pourquoi Nibras ?",
      title: "Un apprentissage rassurant, vivant et centré sur l'enfant",
      intro: "Nibras signifie la lanterne qui guide et illumine. Chaque cours est pensé comme une petite lumière dans la journée de l'enfant.",
      cards: [
        ["Apprentissage ludique", "Des activités et de l'interaction pour rendre l'apprentissage aimé."],
        ["Petits groupes", "Peu d'élèves afin d'assurer un suivi individuel."],
        ["Enseignants qualifiés", "Des enseignants expérimentés dans l'accompagnement des enfants."],
        ["Suivi continu", "Des rapports réguliers sur la présence et la progression."]
      ]
    },
    programs: {
      eyebrow: "Nos programmes",
      title: "Des parcours clairs selon l'âge et le niveau",
      items: [
        { title: "Le Saint Coran", icon: "BookOpen", points: ["Mémorisation", "Révision", "Récitation", "Tajwid"] },
        { title: "La Sira prophétique", icon: "Moon", points: ["Histoires interactives", "Valeurs éducatives", "Suivre l'exemple du Prophète ﷺ"] },
        { title: "Bientôt", icon: "Sparkles", points: ["Langue arabe", "Bon comportement islamique", "Histoire islamique"] }
      ]
    },
    classes: {
      eyebrow: "Fonctionnement",
      title: "Du premier contact au suivi en quelques étapes",
      steps: ["Inscription", "Test de niveau", "Intégration au groupe", "Apprentissage et suivi"],
      note: "Cours en direct sur Zoom avec activités courtes, questions et révisions adaptées à l'âge."
    },
    testimonials: {
      eyebrow: "Témoignages",
      title: "Une confiance qui grandit cours après cours",
      items: [
        ["Maman de Mariam", "Ma fille attend son cours de Coran avec joie, la méthode est très douce avec les enfants."],
        ["Papa de Yassine", "Le petit groupe et le suivi sont clairs. Nous avons vu des progrès en récitation en quelques semaines."],
        ["Maman d'Adam", "J'aime la façon de relier la Sira aux valeurs du quotidien avec des mots simples."]
      ]
    },
    cta: {
      title: "Commencez aujourd'hui le voyage de votre enfant avec le Coran",
      button: "Réserver le cours d'essai gratuit"
    },
    contact: {
      eyebrow: "Contact",
      title: "Nous répondons à vos questions et vous aidons à choisir le bon groupe",
      whatsapp: "WhatsApp : +216 26 616 540",
      email: "contact@nibras.tn",
      facebook: "Nibras Academy"
    },
    form: {
      title: "Réserver un cours d'essai",
      intro: "Remplissez ces informations et nous vous contacterons pour choisir le bon créneau.",
      firstName: "Prénom",
      lastName: "Nom",
      phone: "Numéro de téléphone",
      dateOfBirth: "Date de naissance",
      subject: "Matière",
      freeTimes: "Créneaux disponibles",
      comments: "Autres commentaires",
      firstNamePlaceholder: "Exemple : Adam",
      lastNamePlaceholder: "Exemple : Ben Ali",
      phonePlaceholder: "Exemple : 26616540",
      phoneHint: "Le numéro doit contenir exactement 8 chiffres.",
      subjectPlaceholder: "Choisir une matière",
      freeTimesPlaceholder: "Exemple : samedi soir, dimanche matin",
      commentsPlaceholder: "Tout détail utile pour choisir le bon groupe",
      submit: "Envoyer la demande",
      sending: "Envoi...",
      close: "Fermer",
      success: "Votre demande a bien été envoyée. Nous vous contacterons bientôt.",
      error: "Impossible d'envoyer la demande maintenant. Veuillez réessayer plus tard.",
      subjects: ["Saint Coran", "Tajwid", "Sira prophétique", "Évaluer le niveau d'abord"]
    },
    footer: {
      description: "Nibras est une académie éducative qui cultive l'amour du Coran et de la Sira chez les enfants avec une méthode joyeuse et utile.",
      copyright: "Tous droits réservés."
    }
  }
} as const;
