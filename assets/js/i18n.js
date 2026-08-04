/* ============================================================
   ORTOMESA – Traducciones (Español / English)
   Los elementos traducibles llevan el atributo data-i18n.
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  var I18N = {

    es: {
      topbar_hours: 'Lun – Vie &nbsp;8:00 am – 5:00 pm',

      nav_home: 'Inicio',
      nav_about: '¿Quiénes somos?',
      nav_services: 'Servicios',
      nav_faq: 'Preguntas',
      nav_testimonials: 'Testimonios',
      nav_cta: 'Agenda una cita',

      hero_badge: 'Consultorio Ortomesa · Armenia, Quindío',
      hero_title: 'Tratamiento del dolor de <em>rodilla, hombro y pie</em> en Armenia',
      hero_sub: 'El Dr. Jorge Iván Mesa, ortopedista con más de 15 años de experiencia en Armenia, Quindío, trata la artrosis, las lesiones de menisco, el manguito rotador y la fascitis plantar con artroscopia, ondas de choque y medicina regenerativa.',
      hero_btn_cta: 'Agenda tu cita',
      hero_btn_more: 'Conoce más',
      hero_before: 'Antes · Con dolor',
      hero_after: 'Después · Recuperado',
      stat_years: 'años de experiencia',
      stat_procedures: 'procedimientos',
      stat_commitment: 'compromiso',

      feat1_title: 'Tratamiento del dolor',
      feat1_text: 'Rodilla, hombro, pie y codo tratados con métodos avanzados y mínimamente invasivos.',
      feat2_title: 'Última tecnología',
      feat2_text: 'Ondas de choque y células de regeneración para mejorar tu movilidad sin cirugía.',
      feat3_title: 'Cirugía especializada',
      feat3_text: 'Solo cuando es necesario, evaluando siempre todas las alternativas disponibles.',

      about_tag: 'Nuestro especialista',
      about_p1: 'Médico ortopedista con más de 15 años de experiencia, responsable y comprometido con sus pacientes y sus familias. En continua actualización médica e investigativa, con sentido social y de pertenencia.',
      about_p2: 'Supraespecialista en Cirugía de Hombro y Rodilla, Cirugía Artroscópica y Traumatología Deportiva. Experto en Ecografía Músculo-Esquelética (Universidad Francisco de Victoria, Madrid, España).',
      about_p3: 'Miembro de la Sociedad Internacional de Ondas de Choque (ISWT) y expresidente de la Sociedad Quindiana de Ortopedia (SCCOT).',
      about_badge: 'procedimientos<br>exitosos',
      pill1: 'Hombro &amp; Rodilla',
      pill2: 'Artroscopia',
      pill3: 'Ondas de choque',
      pill4: 'Medicina Regenerativa',
      pill5: 'Traumatología deportiva',
      about_btn: 'Agenda una consulta',

      cta_title: 'Es momento de acabar con el dolor',
      cta_text: 'Contamos con el conocimiento, la experiencia y la certificación para brindarte una terapia que mejorará tu calidad de vida.',
      cta_btn: 'Escríbenos ahora',

      svc_tag: 'Nuestros servicios',
      svc_title: 'Tratamientos para tu dolor de rodilla, hombro, codo y pie',
      svc_sub: 'Artrosis, lesiones de menisco, manguito rotador, epicondilitis y fascitis plantar tratados con artroscopia, ondas de choque y medicina regenerativa en Armenia, Quindío.',
      svc1_title: 'Lesión de rodilla',
      svc1_text: 'Artrosis de rodilla (gonartrosis), lesión de menisco, condromalacia rotuliana y ligamento cruzado: tratamos el dolor que aparece al caminar, flexionar o subir escaleras.',
      svc2_title: 'Lesión de hombro',
      svc2_text: 'Manguito rotador, tendinitis del supraespinoso, bursitis y artrosis acromioclavicular: recupera la movilidad de tu hombro y duerme sin dolor.',
      svc3_title: 'Lesión de codo',
      svc3_text: 'Epicondilitis o codo de tenista, epitrocleítis y bursitis: alivia el dolor que limita tu fuerza de agarre y tu trabajo diario.',
      svc4_title: 'Lesión de pie',
      svc4_text: 'Fascitis plantar, espolón calcáneo, tendinitis de Aquiles y dolor en el talón o la planta del pie: vuelve a caminar sin molestias.',
      svc5_title: 'Ondas de choque',
      svc5_text: 'Técnica no invasiva de alta energía, ideal para fascitis plantar, epicondilitis y tendinitis calcificada. Sin cirugía y sin incapacidad.',
      svc6_title: 'Células regenerativas',
      svc6_text: 'Plasma rico en plaquetas y terapias biológicas para el cartílago desgastado, la artrosis y las tendinopatías crónicas.',

      cond_title: 'Motivos de consulta más frecuentes',
      cond_chips: '<span>Artrosis de rodilla (gonartrosis)</span><span>Lesión de menisco</span><span>Condromalacia rotuliana</span><span>Ligamento cruzado anterior</span><span>Bursitis de rodilla</span><span>Tendinitis rotuliana</span><span>Cartílago de rodilla desgastado</span><span>Dolor de rodilla al subir escaleras</span><span>Manguito rotador</span><span>Tendinitis del supraespinoso</span><span>Bursitis de hombro</span><span>Artrosis acromioclavicular</span><span>Epicondilitis o codo de tenista</span><span>Fascitis plantar</span><span>Espolón calcáneo</span><span>Tendinitis de Aquiles</span><span>Dolor en la planta del pie</span><span>Artroscopia de rodilla y hombro</span>',

      faq_tag: 'Preguntas frecuentes',
      faq_title: 'Resolvemos tus dudas sobre el dolor articular',
      faq_sub: 'Estas son las preguntas que más nos hacen los pacientes en consulta. Si la tuya no está aquí, escríbenos por WhatsApp y con gusto te orientamos.',
      faq1_q: '¿Por qué me duelen las rodillas al subir y bajar escaleras?',
      faq1_a: 'El dolor de rodilla al subir o bajar escaleras suele relacionarse con condromalacia rotuliana (desgaste del cartílago de la rótula), artrosis de rodilla o una lesión de menisco. Si el dolor persiste más de dos semanas, se acompaña de inflamación o de sensación de bloqueo, conviene una valoración con ecografía músculo-esquelética para identificar la causa exacta.',
      faq2_q: '¿La artrosis de rodilla tiene cura?',
      faq2_a: 'La gonartrosis no tiene una cura definitiva porque el cartílago desgastado no se regenera por completo, pero sí se puede tratar. Con medicina regenerativa, ondas de choque, fortalecimiento muscular y control del peso es posible reducir el dolor, mejorar la movilidad y retrasar o evitar una cirugía de reemplazo de rodilla.',
      faq3_q: '¿Cómo puedo aliviar el dolor de rodilla rápido en casa?',
      faq3_a: 'Como medida inicial ayudan el reposo relativo, aplicar frío local durante 15 minutos varias veces al día, evitar escaleras y actividades de impacto, y elevar la pierna si hay inflamación. Estas medidas alivian de forma temporal, pero no tratan la causa: si el dolor reaparece o dura más de dos semanas, consulta al ortopedista.',
      faq4_q: '¿Qué es la fascitis plantar y por qué duele el talón del pie?',
      faq4_a: 'La fascitis plantar es la inflamación de la banda de tejido que recorre la planta del pie. Su síntoma típico es un dolor punzante en el talón con los primeros pasos de la mañana. Responde muy bien a la terapia de ondas de choque, combinada con estiramientos y un calzado adecuado.',
      faq5_q: '¿Por qué me duele el hombro al levantar el brazo?',
      faq5_a: 'La causa más frecuente es una lesión del manguito rotador, especialmente del tendón supraespinoso, seguida de la tendinitis, la bursitis y la artrosis acromioclavicular. Una ecografía en consulta permite ver el tendón en movimiento y definir si el manejo es con ondas de choque, medicina regenerativa o artroscopia.',
      faq6_q: '¿Cuándo se necesita una artroscopia de rodilla?',
      faq6_a: 'Se indica cuando hay lesiones de menisco, del ligamento cruzado, cuerpos libres o daño del cartílago que no mejoran con tratamiento conservador. Es una cirugía mínimamente invasiva, con incisiones pequeñas, menos dolor después de la operación y una recuperación más rápida que la cirugía abierta.',
      faq7_q: '¿Qué ejercicios sirven para la artrosis de rodilla en adulto mayor?',
      faq7_a: 'Los más recomendados son el fortalecimiento del cuádriceps, la bicicleta estática sin resistencia, la caminata en superficie plana y los ejercicios en piscina. Conviene evitar sentadillas profundas, trote y saltos. Lo ideal es que el programa lo adapte un profesional según cada caso.',
      faq8_q: '¿Qué es la condromalacia rotuliana?',
      faq8_a: 'Es el reblandecimiento y desgaste del cartílago que recubre la rótula. Produce dolor en la parte delantera de la rodilla, que empeora al subir escaleras, agacharse o permanecer mucho tiempo sentado. Suele mejorar con fortalecimiento muscular, corrección de la mecánica de la rodilla y, en casos seleccionados, medicina regenerativa.',
      faq9_q: '¿La terapia de ondas de choque duele?',
      faq9_a: 'Se siente una molestia tolerable durante la aplicación, similar a golpes rápidos sobre la zona, y no requiere anestesia. Cada sesión dura entre 15 y 20 minutos y puedes retomar tus actividades el mismo día. Es normal una sensibilidad leve durante las 24 horas siguientes.',
      faq10_q: '¿Dónde puedo consultar un ortopedista en Armenia, Quindío?',
      faq10_a: 'El consultorio Ortomesa del Dr. Jorge Iván Mesa está en la Cra 14 No. 8 Norte – 63, Edificio Cañaveral, consultorio 401, en Armenia, Quindío. La atención es de lunes a viernes de 8:00 am a 6:00 pm. Puedes agendar tu cita al 606 738 2184 o por WhatsApp al +57 317 306 2308.',

      svc_more: 'Ver más',
      modal_treatment_label: 'Tratamiento',
      modal_recovery_label: 'Recomendaciones para la recuperación',
      modal_disclaimer: 'Esta información es orientativa: cada caso se evalúa de forma individual en consulta.',
      modal_cta: 'Agenda tu valoración',

      svc1_modal_desc: 'La rodilla es una de las articulaciones más complejas y con mayor carga del cuerpo. Lesiones como la ruptura de meniscos, las lesiones de ligamento cruzado, la condromalacia y la artrosis pueden causar dolor, inflamación e inestabilidad, limitando actividades tan básicas como caminar o subir escaleras.',
      svc1_modal_treatment: '<li>Valoración especializada con ecografía músculo-esquelética para un diagnóstico preciso.</li><li>Manejo del dolor con medicina regenerativa (plasma rico en plaquetas y células regenerativas).</li><li>Terapia de ondas de choque para tendinopatías y lesiones crónicas.</li><li>Cirugía artroscópica mínimamente invasiva cuando el caso lo requiere.</li>',
      svc1_modal_recovery: '<li>Seguir el plan de fisioterapia y fortalecimiento muscular indicado.</li><li>Controlar el peso corporal para reducir la carga sobre la articulación.</li><li>Evitar actividades de alto impacto durante la fase de recuperación.</li><li>Aplicar frío local y respetar los tiempos de reposo indicados.</li><li>Asistir a los controles para ajustar el tratamiento según la evolución.</li>',

      svc2_modal_desc: 'El hombro es la articulación con mayor rango de movimiento del cuerpo, lo que lo hace vulnerable a lesiones como la ruptura del manguito rotador, tendinitis, bursitis, luxaciones e inestabilidad. Estas condiciones generan dolor nocturno y dificultad para las actividades cotidianas.',
      svc2_modal_treatment: '<li>Diagnóstico con ecografía músculo-esquelética en consulta.</li><li>Infiltraciones ecoguiadas y medicina regenerativa para tendinopatías.</li><li>Ondas de choque para calcificaciones y tendinitis crónicas.</li><li>Artroscopia de hombro para reparación del manguito rotador e inestabilidad.</li>',
      svc2_modal_recovery: '<li>Realizar los ejercicios de movilidad y fortalecimiento progresivo indicados.</li><li>Evitar cargar peso o hacer movimientos por encima de la cabeza en las primeras semanas.</li><li>Mantener una buena postura y hacer pausas activas en el trabajo.</li><li>Usar el cabestrillo durante el tiempo indicado en caso de cirugía.</li><li>No suspender la rehabilitación aunque el dolor mejore.</li>',

      svc3_modal_desc: 'El codo participa en casi todos los movimientos del brazo y la mano. Lesiones como la epicondilitis (codo de tenista), la epitrocleítis (codo de golfista), la bursitis y los atrapamientos nerviosos causan dolor que limita la fuerza de agarre y la actividad laboral o deportiva.',
      svc3_modal_treatment: '<li>Evaluación clínica y ecográfica para identificar el tejido afectado.</li><li>Ondas de choque, tratamiento de elección en la epicondilitis crónica.</li><li>Plasma rico en plaquetas para estimular la reparación del tendón.</li><li>Cirugía en casos seleccionados que no responden al manejo conservador.</li>',
      svc3_modal_recovery: '<li>Modificar temporalmente las actividades que desencadenan el dolor.</li><li>Realizar ejercicios excéntricos de fortalecimiento según indicación.</li><li>Usar banda de epicondilitis si el especialista lo recomienda.</li><li>Corregir la técnica deportiva o la ergonomía laboral para evitar recaídas.</li>',

      svc4_modal_desc: 'El pie soporta todo el peso del cuerpo en cada paso. Condiciones como la fascitis plantar, el espolón calcáneo, la tendinopatía de Aquiles, los esguinces y las metatarsalgias producen dolor que altera la marcha y la calidad de vida.',
      svc4_modal_treatment: '<li>Diagnóstico ecográfico de fascia, tendones y ligamentos.</li><li>Ondas de choque para fascitis plantar y espolón calcáneo.</li><li>Medicina regenerativa en tendinopatía de Aquiles y lesiones crónicas.</li><li>Manejo integral con recomendaciones de calzado y plantillas.</li>',
      svc4_modal_recovery: '<li>Usar calzado con buen soporte y amortiguación.</li><li>Realizar estiramientos de la fascia plantar y la pantorrilla a diario.</li><li>Evitar caminar descalzo sobre superficies duras durante la recuperación.</li><li>Retomar la actividad deportiva de forma gradual y progresiva.</li>',

      svc5_modal_desc: 'Tecnología no invasiva que aplica ondas acústicas de alta energía sobre el tejido lesionado, estimulando la formación de nuevos vasos sanguíneos, la regeneración del tejido y la disminución del dolor. Está avalada internacionalmente para múltiples patologías del sistema músculo-esquelético.',
      svc5_modal_treatment: '<li>Sesiones ambulatorias de 15 a 20 minutos, sin anestesia ni incapacidad.</li><li>Se realiza en ciclos de 3 a 5 sesiones según la patología.</li><li>Indicada en fascitis plantar, epicondilitis, tendinitis calcificada de hombro y tendinopatía de Aquiles, entre otras.</li><li>Aplicada por un especialista miembro de la Sociedad Internacional de Ondas de Choque (ISWT).</li>',
      svc5_modal_recovery: '<li>Puede presentarse molestia leve o enrojecimiento pasajero tras la sesión: es normal.</li><li>Evitar antiinflamatorios en los días posteriores (interfieren con el efecto regenerador), salvo indicación médica.</li><li>Mantener reposo deportivo relativo entre sesiones.</li><li>Completar el ciclo de sesiones: el efecto es acumulativo y progresivo.</li>',

      svc6_modal_desc: 'La medicina regenerativa utiliza recursos biológicos del propio paciente —como el plasma rico en plaquetas y los concentrados celulares— para reparar tejidos dañados, disminuir la inflamación y retrasar la progresión del desgaste articular, evitando o posponiendo cirugías.',
      svc6_modal_treatment: '<li>Obtención de la muestra del propio paciente y preparación en el mismo procedimiento.</li><li>Aplicación ecoguiada y precisa en la articulación o el tendón afectado.</li><li>Procedimiento ambulatorio, con mínimas molestias.</li><li>Indicado en artrosis, lesiones de cartílago, tendinopatías y lesiones musculares.</li>',
      svc6_modal_recovery: '<li>Reposo relativo de 24 a 72 horas tras la aplicación.</li><li>Evitar antiinflamatorios los días previos y posteriores, salvo indicación médica.</li><li>Seguir el programa de fisioterapia para potenciar los resultados.</li><li>Los resultados son progresivos: la mejoría suele notarse en las semanas siguientes.</li>',

      testi_tag: 'Testimonios',
      testi_title: 'Lo que dicen nuestros pacientes',
      testi1_text: 'Realmente una excelente atención, se siente que nos escucha, nos explica y su calidad humana contribuyen a la mejoría… tratamientos médicos muy acertados… gracias porque gracias a todo lo expuesto mi mamá hoy está bien.',
      testi2_text: 'Excelente médico. Sus tratamientos son confiables, seguros y efectivos. Es una excelente persona y profesional. Recomendado 100%. La persona que le asiste es excelente y la experiencia siempre es buena.',
      testi_role: 'Paciente',

      footer_desc: 'Es momento de calmar el dolor y mejorar tu calidad de vida. En Ortomesa estamos para ayudarte.',
      footer_contact_title: 'Contáctanos',
      footer_address: 'Cra 14 No. 8 Norte – 63, Edf. Cañaveral, Consultorio 401. Armenia, Quindío',
      footer_mobile: 'Móvil: +(57) 317 306 2308',
      footer_hours_title: 'Horario de atención',
      footer_mon: 'Lunes <span>8:00 am – 6:00 pm</span>',
      footer_tue: 'Martes <span>8:00 am – 6:00 pm</span>',
      footer_wed: 'Miércoles <span>8:00 am – 6:00 pm</span>',
      footer_thu: 'Jueves <span>8:00 am – 6:00 pm</span>',
      footer_fri: 'Viernes <span>8:00 am – 6:00 pm</span>',
      footer_copy: '&copy; 2026 Ortomesa – Consultorio Ortopédico Armenia &nbsp;·&nbsp; Desarrollado por <a href="https://vamosarayar.com/" target="_blank">Rayar</a>',

      meta_title: 'Ortopedista en Armenia | Dolor de Rodilla y Hombro | Ortomesa',
      meta_description: 'Ortopedista en Armenia, Quindío. El Dr. Jorge Iván Mesa trata el dolor de rodilla, hombro y pie con artroscopia, ondas de choque y medicina regenerativa.'
    },

    en: {
      topbar_hours: 'Mon – Fri &nbsp;8:00 am – 5:00 pm',

      nav_home: 'Home',
      nav_about: 'About us',
      nav_services: 'Services',
      nav_faq: 'FAQ',
      nav_testimonials: 'Testimonials',
      nav_cta: 'Book an appointment',

      hero_badge: 'Ortomesa Clinic · Armenia, Quindío',
      hero_title: '<em>Knee, shoulder and foot</em> pain treatment in Armenia',
      hero_sub: 'Dr. Jorge Iván Mesa, an orthopedic surgeon with over 15 years of experience in Armenia, Quindío, treats osteoarthritis, meniscus tears, rotator cuff injuries and plantar fasciitis with arthroscopy, shockwave therapy and regenerative medicine.',
      hero_btn_cta: 'Book your appointment',
      hero_btn_more: 'Learn more',
      hero_before: 'Before · In pain',
      hero_after: 'After · Recovered',
      stat_years: 'years of experience',
      stat_procedures: 'procedures',
      stat_commitment: 'commitment',

      feat1_title: 'Pain treatment',
      feat1_text: 'Knee, shoulder, foot and elbow treated with advanced, minimally invasive methods.',
      feat2_title: 'Latest technology',
      feat2_text: 'Shockwave therapy and regenerative cells to improve your mobility without surgery.',
      feat3_title: 'Specialized surgery',
      feat3_text: 'Only when necessary, always evaluating all available alternatives.',

      about_tag: 'Our specialist',
      about_p1: 'Orthopedic surgeon with over 15 years of experience, responsible and committed to his patients and their families. In continuous medical and research training, with a strong social conscience and sense of belonging.',
      about_p2: 'Subspecialist in Shoulder and Knee Surgery, Arthroscopic Surgery and Sports Traumatology. Expert in Musculoskeletal Ultrasound (Francisco de Vitoria University, Madrid, Spain).',
      about_p3: 'Member of the International Society for Shockwave Therapy (ISWT) and former president of the Quindío Society of Orthopedics (SCCOT).',
      about_badge: 'successful<br>procedures',
      pill1: 'Shoulder &amp; Knee',
      pill2: 'Arthroscopy',
      pill3: 'Shockwave therapy',
      pill4: 'Regenerative Medicine',
      pill5: 'Sports traumatology',
      about_btn: 'Book a consultation',

      cta_title: "It's time to end the pain",
      cta_text: 'We have the knowledge, experience and certification to provide you with a therapy that will improve your quality of life.',
      cta_btn: 'Message us now',

      svc_tag: 'Our services',
      svc_title: 'Treatments for your knee, shoulder, elbow and foot pain',
      svc_sub: 'Osteoarthritis, meniscus tears, rotator cuff injuries, epicondylitis and plantar fasciitis treated with arthroscopy, shockwave therapy and regenerative medicine in Armenia, Quindío.',
      svc1_title: 'Knee injury',
      svc1_text: 'Knee osteoarthritis, meniscus tears, chondromalacia patellae and cruciate ligament injuries: we treat the pain that appears when walking, bending or climbing stairs.',
      svc2_title: 'Shoulder injury',
      svc2_text: 'Rotator cuff, supraspinatus tendinitis, bursitis and acromioclavicular osteoarthritis: regain your shoulder mobility and sleep without pain.',
      svc3_title: 'Elbow injury',
      svc3_text: "Epicondylitis or tennis elbow, golfer's elbow and bursitis: relieve the pain that limits your grip strength and your daily work.",
      svc4_title: 'Foot injury',
      svc4_text: 'Plantar fasciitis, heel spurs, Achilles tendinitis and pain in the heel or sole of the foot: walk again without discomfort.',
      svc5_title: 'Shockwave therapy',
      svc5_text: 'A non-invasive high-energy technique, ideal for plantar fasciitis, epicondylitis and calcific tendinitis. No surgery and no downtime.',
      svc6_title: 'Regenerative cells',
      svc6_text: 'Platelet-rich plasma and biological therapies for worn cartilage, osteoarthritis and chronic tendinopathies.',

      cond_title: 'Most frequent reasons for consultation',
      cond_chips: '<span>Knee osteoarthritis</span><span>Meniscus tear</span><span>Chondromalacia patellae</span><span>Anterior cruciate ligament</span><span>Knee bursitis</span><span>Patellar tendinitis</span><span>Worn knee cartilage</span><span>Knee pain climbing stairs</span><span>Rotator cuff</span><span>Supraspinatus tendinitis</span><span>Shoulder bursitis</span><span>Acromioclavicular osteoarthritis</span><span>Epicondylitis or tennis elbow</span><span>Plantar fasciitis</span><span>Heel spur</span><span>Achilles tendinitis</span><span>Pain in the sole of the foot</span><span>Knee and shoulder arthroscopy</span>',

      faq_tag: 'Frequently asked questions',
      faq_title: 'Answers to your questions about joint pain',
      faq_sub: 'These are the questions our patients ask us the most in consultation. If yours is not here, message us on WhatsApp and we will gladly guide you.',
      faq1_q: 'Why do my knees hurt when going up and down stairs?',
      faq1_a: 'Knee pain when climbing or going down stairs is usually related to chondromalacia patellae (wear of the kneecap cartilage), knee osteoarthritis or a meniscus tear. If the pain lasts more than two weeks, comes with swelling or a locking sensation, an assessment with musculoskeletal ultrasound is advisable to identify the exact cause.',
      faq2_q: 'Is there a cure for knee osteoarthritis?',
      faq2_a: 'Knee osteoarthritis has no definitive cure because worn cartilage does not fully regenerate, but it can be treated. With regenerative medicine, shockwave therapy, muscle strengthening and weight control it is possible to reduce pain, improve mobility and delay or avoid knee replacement surgery.',
      faq3_q: 'How can I relieve knee pain quickly at home?',
      faq3_a: 'As a first measure, relative rest helps, along with applying local cold for 15 minutes several times a day, avoiding stairs and high-impact activities, and elevating the leg if there is swelling. These measures give temporary relief but do not treat the cause: if the pain returns or lasts more than two weeks, see an orthopedic specialist.',
      faq4_q: 'What is plantar fasciitis and why does my heel hurt?',
      faq4_a: 'Plantar fasciitis is the inflammation of the band of tissue that runs along the sole of the foot. Its typical symptom is a sharp heel pain with the first steps in the morning. It responds very well to shockwave therapy, combined with stretching and proper footwear.',
      faq5_q: 'Why does my shoulder hurt when I lift my arm?',
      faq5_a: 'The most frequent cause is a rotator cuff injury, especially of the supraspinatus tendon, followed by tendinitis, bursitis and acromioclavicular osteoarthritis. An in-office ultrasound makes it possible to see the tendon in motion and decide whether the treatment is shockwave therapy, regenerative medicine or arthroscopy.',
      faq6_q: 'When is knee arthroscopy needed?',
      faq6_a: 'It is indicated when there are meniscus tears, cruciate ligament injuries, loose bodies or cartilage damage that do not improve with conservative treatment. It is a minimally invasive surgery, with small incisions, less pain after the operation and a faster recovery than open surgery.',
      faq7_q: 'What exercises help knee osteoarthritis in older adults?',
      faq7_a: 'The most recommended are quadriceps strengthening, stationary cycling without resistance, walking on flat surfaces and pool exercises. Deep squats, jogging and jumping should be avoided. Ideally, a professional should adapt the program to each case.',
      faq8_q: 'What is chondromalacia patellae?',
      faq8_a: 'It is the softening and wear of the cartilage that covers the kneecap. It causes pain at the front of the knee, which worsens when climbing stairs, squatting or sitting for a long time. It usually improves with muscle strengthening, correction of knee mechanics and, in selected cases, regenerative medicine.',
      faq9_q: 'Does shockwave therapy hurt?',
      faq9_a: 'You feel a tolerable discomfort during the application, similar to rapid taps on the area, and it requires no anesthesia. Each session lasts 15 to 20 minutes and you can resume your activities the same day. Mild tenderness during the following 24 hours is normal.',
      faq10_q: 'Where can I see an orthopedic specialist in Armenia, Quindío?',
      faq10_a: "Dr. Jorge Iván Mesa's Ortomesa clinic is located at Cra 14 No. 8 Norte – 63, Cañaveral Building, office 401, in Armenia, Quindío. Office hours are Monday to Friday from 8:00 am to 6:00 pm. You can book your appointment at 606 738 2184 or on WhatsApp at +57 317 306 2308.",

      svc_more: 'Learn more',
      modal_treatment_label: 'Treatment',
      modal_recovery_label: 'Recovery recommendations',
      modal_disclaimer: 'This information is a general guide: every case is individually assessed in consultation.',
      modal_cta: 'Book your assessment',

      svc1_modal_desc: 'The knee is one of the most complex and heavily loaded joints in the body. Injuries such as meniscus tears, cruciate ligament injuries, chondromalacia and osteoarthritis can cause pain, swelling and instability, limiting activities as basic as walking or climbing stairs.',
      svc1_modal_treatment: '<li>Specialized assessment with musculoskeletal ultrasound for an accurate diagnosis.</li><li>Pain management with regenerative medicine (platelet-rich plasma and regenerative cells).</li><li>Shockwave therapy for tendinopathies and chronic injuries.</li><li>Minimally invasive arthroscopic surgery when the case requires it.</li>',
      svc1_modal_recovery: '<li>Follow the prescribed physiotherapy and muscle-strengthening plan.</li><li>Keep a healthy body weight to reduce the load on the joint.</li><li>Avoid high-impact activities during the recovery phase.</li><li>Apply local cold and respect the prescribed rest periods.</li><li>Attend follow-up visits so the treatment can be adjusted as you progress.</li>',

      svc2_modal_desc: 'The shoulder has the widest range of motion of any joint in the body, which makes it vulnerable to injuries such as rotator cuff tears, tendinitis, bursitis, dislocations and instability. These conditions cause night pain and difficulty with everyday activities.',
      svc2_modal_treatment: '<li>In-office diagnosis with musculoskeletal ultrasound.</li><li>Ultrasound-guided injections and regenerative medicine for tendinopathies.</li><li>Shockwave therapy for calcifications and chronic tendinitis.</li><li>Shoulder arthroscopy for rotator cuff repair and instability.</li>',
      svc2_modal_recovery: '<li>Do the prescribed mobility and progressive strengthening exercises.</li><li>Avoid lifting weight or overhead movements during the first weeks.</li><li>Keep good posture and take active breaks at work.</li><li>Wear the sling for the indicated time in case of surgery.</li><li>Do not stop rehabilitation even if the pain improves.</li>',

      svc3_modal_desc: "The elbow is involved in almost every movement of the arm and hand. Injuries such as epicondylitis (tennis elbow), golfer's elbow, bursitis and nerve entrapments cause pain that limits grip strength and work or sports activity.",
      svc3_modal_treatment: '<li>Clinical and ultrasound evaluation to identify the affected tissue.</li><li>Shockwave therapy, the treatment of choice for chronic epicondylitis.</li><li>Platelet-rich plasma to stimulate tendon repair.</li><li>Surgery in selected cases that do not respond to conservative treatment.</li>',
      svc3_modal_recovery: '<li>Temporarily modify the activities that trigger the pain.</li><li>Do eccentric strengthening exercises as prescribed.</li><li>Use an epicondylitis strap if recommended by the specialist.</li><li>Correct your sports technique or workplace ergonomics to prevent relapses.</li>',

      svc4_modal_desc: 'The foot bears the entire weight of the body with every step. Conditions such as plantar fasciitis, heel spurs, Achilles tendinopathy, sprains and metatarsalgia cause pain that alters gait and quality of life.',
      svc4_modal_treatment: '<li>Ultrasound diagnosis of fascia, tendons and ligaments.</li><li>Shockwave therapy for plantar fasciitis and heel spurs.</li><li>Regenerative medicine for Achilles tendinopathy and chronic injuries.</li><li>Comprehensive management with footwear and insole recommendations.</li>',
      svc4_modal_recovery: '<li>Wear footwear with good support and cushioning.</li><li>Stretch the plantar fascia and calf muscles daily.</li><li>Avoid walking barefoot on hard surfaces during recovery.</li><li>Return to sports gradually and progressively.</li>',

      svc5_modal_desc: 'A non-invasive technology that applies high-energy acoustic waves to the injured tissue, stimulating the formation of new blood vessels, tissue regeneration and pain reduction. It is internationally endorsed for multiple musculoskeletal conditions.',
      svc5_modal_treatment: '<li>Outpatient sessions of 15 to 20 minutes, with no anesthesia or downtime.</li><li>Performed in cycles of 3 to 5 sessions depending on the condition.</li><li>Indicated for plantar fasciitis, epicondylitis, calcific shoulder tendinitis and Achilles tendinopathy, among others.</li><li>Applied by a specialist member of the International Society for Shockwave Therapy (ISWT).</li>',
      svc5_modal_recovery: '<li>Mild discomfort or temporary redness after the session is normal.</li><li>Avoid anti-inflammatory drugs in the following days (they interfere with the regenerative effect), unless medically indicated.</li><li>Keep relative rest from sports between sessions.</li><li>Complete the full cycle of sessions: the effect is cumulative and progressive.</li>',

      svc6_modal_desc: "Regenerative medicine uses the patient's own biological resources — such as platelet-rich plasma and cell concentrates — to repair damaged tissue, reduce inflammation and slow the progression of joint wear, avoiding or postponing surgery.",
      svc6_modal_treatment: '<li>The sample is taken from the patient and prepared during the same procedure.</li><li>Precise, ultrasound-guided application into the affected joint or tendon.</li><li>Outpatient procedure with minimal discomfort.</li><li>Indicated for osteoarthritis, cartilage injuries, tendinopathies and muscle injuries.</li>',
      svc6_modal_recovery: '<li>Relative rest for 24 to 72 hours after the application.</li><li>Avoid anti-inflammatory drugs in the days before and after, unless indicated.</li><li>Follow the physiotherapy program to enhance the results.</li><li>Results are progressive: improvement is usually noticed over the following weeks.</li>',

      testi_tag: 'Testimonials',
      testi_title: 'What our patients say',
      testi1_text: 'Truly excellent care — you can feel that he listens to us and explains everything, and his human warmth contributes to recovery… very accurate medical treatments… thank you, because thanks to all of this my mother is doing well today.',
      testi2_text: 'Excellent doctor. His treatments are reliable, safe and effective. He is an excellent person and professional. 100% recommended. His assistant is excellent and the experience is always a good one.',
      testi_role: 'Patient',

      footer_desc: "It's time to relieve the pain and improve your quality of life. At Ortomesa we are here to help you.",
      footer_contact_title: 'Contact us',
      footer_address: 'Cra 14 No. 8 Norte – 63, Cañaveral Building, Office 401. Armenia, Quindío',
      footer_mobile: 'Mobile: +(57) 317 306 2308',
      footer_hours_title: 'Office hours',
      footer_mon: 'Monday <span>8:00 am – 6:00 pm</span>',
      footer_tue: 'Tuesday <span>8:00 am – 6:00 pm</span>',
      footer_wed: 'Wednesday <span>8:00 am – 6:00 pm</span>',
      footer_thu: 'Thursday <span>8:00 am – 6:00 pm</span>',
      footer_fri: 'Friday <span>8:00 am – 6:00 pm</span>',
      footer_copy: '&copy; 2026 Ortomesa – Orthopedic Clinic Armenia &nbsp;·&nbsp; Developed by <a href="https://vamosarayar.com/" target="_blank">Rayar</a>',

      meta_title: 'Orthopedic Specialist in Armenia | Knee & Shoulder Pain | Ortomesa',
      meta_description: 'Orthopedic specialist in Armenia, Quindío. Dr. Jorge Iván Mesa treats knee, shoulder and foot pain with arthroscopy, shockwave therapy and regenerative medicine.'
    }
  };

  /* Diccionario accesible para otros scripts (modal de servicios) */
  window.ORTOMESA_I18N = I18N;

  var STORAGE_KEY = 'ortomesa-lang';

  function setLang(lang) {
    var dict = I18N[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.documentElement.lang = lang;
    document.title = dict.meta_title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', dict.meta_description);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* modo privado */ }
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      setLang(btn.getAttribute('data-lang'));
    });
  });

  /* Restaurar idioma guardado (el HTML ya está en español) */
  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* modo privado */ }
  if (saved === 'en') setLang('en');

});
