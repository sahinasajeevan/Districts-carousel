import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cards = [
    {
      title: 'Trivandrum',
      text: 'Thiruvananthapuram is located on the west coast of India near the extreme south of the mainland. Referred by Mahatma Gandhi as the “Evergreen city of India”,the city is characterised by its undulating terrain of low coastal hills. The city is classified as a Tier-II city by the government of India.',
      imgSrc: 'https://clubmahindra.gumlet.io/blog/media/section_images/shuttersto-cf0d7a5311568a5.jpg?w=376&dpr=2.6',
      buttonText: 'Explore Kannur'
    },
    {
      title: 'Kollam',
      text: 'Kollam (erstwhile Quilon) is a southern district of Kerala, located 70 km north of the states capital Thiruvananthapuram. It is flanked by the Arabian sea on the west, Tamil Nadu on the east, Alapuzha and Pathanamthitta districts on the north and Thiruvananthapuram district on the south.',
      imgSrc: 'https://static.wixstatic.com/media/c8e24e_389399b79d7d4ff2a10f52d619e12840~mv2.jpeg/v1/fill/w_616,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Jatayu-Nature-Park-In-Kerala.jpeg',

    },
    {
      title: 'Pathanamthitta',
      text: 'The district is close to the western Ghats and is endowed with scenic landscape comprising of low undulating hills, extensive stretches of lush forests, rivers and charming countryside. It is also known for exuberant fairs and festivals.',
      imgSrc: 'https://content.jdmagicbox.com/comp/pathanamthitta/b5/9999px468.x468.190722061953.h1b5/catalogue/mavara-para-pathanamthitta-tourist-attraction-lvbr8j6k33.jpg?clr=',

    },
    {
      title: 'Alappuzha',
      text: 'Alappuzha has a diverse topography. It is a sandy strip of land intercepted by lagoons, rivers and canals. There are neither mountains nor hills in the district except some scattered hillocks lying between Bharanikkavu and Chengannur blocks in the eastern portion of the district.',
      imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/f3/1b/4a/alleppey-backwater-cruise.jpg?w=500&h=400&s=1',

    },

    {
      title: 'Kottayam',
      text: 'Kottayam is the hometown of a vast number of books and periodicals and is the center of publishing business in the State. Kottayam is the first town in India selected by the Ministry of Environment and Forests, Government of India to be transformed as an Eco City.',
      imgSrc: 'https://www.clubmahindra.com/blog/media/section_images/15kottayam-d72ed3ff1b8af6f.webp',

    },
    {
      title: 'Idukki',
      text: 'Idukki is one of the 14 districts of Kerala state, India, created on 26 January 1972. This beautiful High range district of Kerala is geographically known for its Mountainous Hills and Dense Forests. For the people of Kerala, Idukki is always associated with Power Generation.',
      imgSrc: 'https://yatramantra.com/wp-content/uploads/2014/07/Ramakkalmedu-1300x980.png',

    },
    {
      title: 'Ernakulam',
      text: 'An amazing paradigm of development & conservation For the outside world, Ernakulam is part of Kochi referred to in the history of Kerala as the Queen of Arabian Sea. The densely populated Ernakulam District embodies the achievements of the Kerala State in literacy, industry, trade, and commerce.',
      imgSrc: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/29/93/c7/front.jpg?w=500&h=400&s=1',

    },
    {
      title: 'Thrissur',
      text: 'Thrissur is the cultural capital of Kerala. Thrissur District is located in the central part of Kerala, derived its name from Thri-Shiva-Perur, which literally translates to "The City of Three Siva". (Vadakkum Nathan Temple, Asokeswarm Temple and Irittichira Temple).',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQldSWjotTn5lmlqRDJds6vgt3S7ytAqmt_qg&s',

    },
    {
      title: 'Palakkad',
      text: 'Palakkad is a vast stretch of fertile plains interspersed with hills, rivers, mountain streams and forests and is home to the Silent Valley National Park. A 40-kilometre mountain pass known as the Palakkad gap at the foothills of the Western Ghats, acts as a corridor between Kerala and Tamil Nadu.',
      imgSrc: 'https://www.holidify.com/images/cmsuploads/compressed/640px-Sithar_Kundu_View_Point_01_20190208100828.jpg',

    },
    {
      title: 'Malappuram',
      text: 'Malappuram literally means a land atop hills and the region is enriched by three great rivers flowing through it – the Chaliyar, Kadalundi and the Bharathapuzha. Malappuram has made numerous contributions to the cultural heritage of Kerala.',
      imgSrc: 'https://www.holidify.com/images/cmsuploads/compressed/640px-Sithar_Kundu_View_Point_01_20190208100828.jpg',

    },
    {
      title: 'Wayanad',
      text: 'Wayanad, nestled in the Western Ghats of Kerala, India, is a scenic district known for its lush greenery, mist-covered mountains, and diverse wildlife. Often referred to as the "Green Paradise" of Kerala, Wayanad is a haven for nature lovers, adventure enthusiasts, and those looking for a peaceful retreat.',
      imgSrc: 'https://aftertherains.in/blog/wp-content/uploads/2022/06/Wayanad_Churam_thamarasseri-1024x682-1.jpg',

    },
    {
      title: 'Kozhikode',
      text: 'Kozhikode, also known as Calicut, is a vibrant city on the southwestern coast of India in the state of Kerala. Kozhikode’s culture is a beautiful blend of its Arab, Portuguese, and British influences, which is evident in its cuisine, architecture, and lifestyle.',
      imgSrc: 'https://static.wixstatic.com/media/c8e24e_d40c9ed29a9146be80738aa97a9e49a4~mv2.jpg/v1/fill/w_610,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Kozhikode-Beach.jpg',

    },
    {
      title: 'Kannur',
      text: 'Kannur, a coastal city in Kerala, India, is renowned for its scenic beauty, cultural heritage, and historical significance. The city is celebrated for the vibrant and unique Theyyam dance—a ritualistic art form performed at sacred groves and temples that showcases intricate costumes, powerful storytelling, and spiritual themes.',
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSytEh5Uqge-yT26HDkwofu55zwGBKXV2j5HA&s',

    },
    {
      title: 'Kasargod',
      text: 'Kasargod, the northernmost district of Kerala, is a region celebrated for its cultural diversity, ancient architecture, and pristine natural landscapes. Known as the "Land of Gods, Forts, and Rivers," Kasargod is dotted with historic forts, sacred temples, and tranquil backwaters, giving it a unique appeal that draws both pilgrims and tourists.',
      imgSrc: 'https://www.indiatravelblog.com/attachments/destinations/291-1-Kasargod-tourist-destinations.jpg',

    },

    // Add more card objects up to 14 or more as needed
  ];

}
