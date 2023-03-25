# IF3260_Tugas2_K01_G08

Link Laporan : https://docs.google.com/document/d/1NQ_qKItZkTnZ2BSv-eVpohRgoLaGFqDER0cgsk9pvxQ/edit?usp=sharing

## Deskripsi Singkat

Dalam tugas ini, dibuat sebuah aplikasi berbasis web untuk melakukan manipulasi pada hollow object yang juga dibuat. Kode dibuat dalam bahasa Javascript dan menggunakan API WebGL. WebGL merupakan API Javascript untuk me-render grafika 2 dan 3 dimensi menggunakan browser. Kami menggunakan browser Google Chrome dengan mengaktifkan WebGL developer extension yang telah tersedia.

## Cara Menjalankan

Berikut merupakan langkah-langkah untuk menjalankan proyek ini:

1. _Clone_ atau _download as zip_ _repository_ ini.
2. Buka folder pada VS Code.
3. Jika belum menginstal ekstensi Live Server, _install extension Live Server_ melalui Ctrl+Shift+X lalu cari `Live Server`.
4. Buka _file_ `index.html`, lalu klik F1.
5. Web akan terbuka pada browser default (kami menggunakan Chrome).

## _Hollow Objects_

1. Hollow Cube (Ilham Prasetyo Wibowo / 13520013)
2. Hollow Triangular Prism (Maharani Ayu Putri Irawan / 13520019)
3. Hollow Cuboid (Yohana Golkaria Nainggolan / 13520053)

## Transformasi

Ada 3 transformasi yang bisa dilakukan pada _3D Hollow Object_ yang dibuat, yakni:

1. Translasi
2. Rotasi
3. _Scaling_

Untuk melakukan transformasi ini, ketika sebuah bangun sudah di-_load_, geser _slider_, baik pada arah x, y, maupun z untuk setiap jenis transformasi. Efek akan langsung terlihat pada _canvas_.

## _Input & Output_

Untuk melakukan _load hollow object_ pada _canvas_, gunakan _input file_ yang tersedia di panel kanan.

1. Klik `Choose file`
2. Pilih file berekstensi `.json` yang telah disediakan pada `/model`
3. Klik `Load`
4. Model sudah ter-_load_ pada _canvas_

Untuk menyimpan _3D hollow object_, gunakan _button_ yang tersedia di panel kanan

1. Jika ingin menyimpan dengan nama file tertentu, masukkan nama file pada input teks yang tersedia (tanpa ekstensi).
2. Klik `save`.
3. Model tersimpan pada `Downloads` dengan nama default `hollowobject.json` atau dengan nama file _custom_ yang telah dimasukkan pada input teks dengan ekstensi JSON.

## Spesifikasi Lanjutan

Kami mengimplementasikan spek lanjutan berikut:

1. _Manual Shading_ \
   Fitur manual shading diimplementasikan menggunakan modified model Phong dengan memperhitungkan ambient, diffuse, dan specular reflection pada fragment shader dengan dipengaruhi oleh normal bidang.
2. _Save_ \
   Fitur _save_ diimplementasikan dengan mengaplikasikan matriks transformasi pada titik-titik objek 3D dan normals-nya. Lalu, dibuat file JSON dan disimpan dengan Blob.
3. _Animation_ \
   Fitur ini diimplementasikan dengan terus melakukan rotasi terhadap objek pada sumbu x dan y.

## Dibuat Oleh

[@ilhamwibowo](https://github.com/ilhamwibowo)
[@rannnayy](https://github.com/rannnayy)
[@Yohanagn](https://github.com/Yohanagn)
