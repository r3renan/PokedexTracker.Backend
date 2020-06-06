PGDMP     ;    -                x            pokedex_development     11.8 (Ubuntu 11.8-1.pgdg20.04+1)     12.3 (Ubuntu 12.3-1.pgdg20.04+1)     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24600    pokedex_development    DATABASE     �   CREATE DATABASE pokedex_development WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
 #   DROP DATABASE pokedex_development;
                pokedex_admin    false            �            1259    24612    SequelizeMeta    TABLE     R   CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);
 #   DROP TABLE public."SequelizeMeta";
       public            pokedex_admin    false            �            1259    24619    pokemons    TABLE     r  CREATE TABLE public.pokemons (
    id integer NOT NULL,
    "pokemonId" integer,
    name character varying(255),
    "spriteMale" character varying(255),
    "spriteFemale" character varying(255),
    type1 character varying(255),
    type2 character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.pokemons;
       public            pokedex_admin    false            �            1259    24617    pokemons_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pokemons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.pokemons_id_seq;
       public          pokedex_admin    false    204            �           0    0    pokemons_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.pokemons_id_seq OWNED BY public.pokemons.id;
          public          pokedex_admin    false    203                       2604    24622    pokemons id    DEFAULT     j   ALTER TABLE ONLY public.pokemons ALTER COLUMN id SET DEFAULT nextval('public.pokemons_id_seq'::regclass);
 :   ALTER TABLE public.pokemons ALTER COLUMN id DROP DEFAULT;
       public          pokedex_admin    false    204    203    204            �          0    24612    SequelizeMeta 
   TABLE DATA           /   COPY public."SequelizeMeta" (name) FROM stdin;
    public          pokedex_admin    false    202   g       �          0    24619    pokemons 
   TABLE DATA              COPY public.pokemons (id, "pokemonId", name, "spriteMale", "spriteFemale", type1, type2, "createdAt", "updatedAt") FROM stdin;
    public          pokedex_admin    false    204   �       �           0    0    pokemons_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.pokemons_id_seq', 252, true);
          public          pokedex_admin    false    203                       2606    24616     SequelizeMeta SequelizeMeta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);
 N   ALTER TABLE ONLY public."SequelizeMeta" DROP CONSTRAINT "SequelizeMeta_pkey";
       public            pokedex_admin    false    202                       2606    24627    pokemons pokemons_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.pokemons
    ADD CONSTRAINT pokemons_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.pokemons DROP CONSTRAINT pokemons_pkey;
       public            pokedex_admin    false    204            �   .   x�32020030345512�M.JM,I�-��N�����*����� �Z
J      �      x��]˖���K_��^E� j�Þ��p'�M�T`��q#�����	����x��A��%o!�u���ĩ��6��؏�i���?��3�5���v�~���8&���翺����������C5�u?������Yr:���{�U[�a�ތ}���?�S��������/S���D����$�й諆w��k&����N\i���Bb���a�ן��..�k�w��6ΰH2��HfB��a[{F�nC�d.�3�̅JŦ�����J������K剶?��wHB�Y�ۖ��Yr;u���$L�)~$�0�W}<չ�#h^r�Qw}5���$�& Y�Ll�U�	� l<��,�M_��8�;�;$���h~}񮉾�'�P�"�
;�}�x��mAR�@Ri��Ϲ�GΓ7��O/p�%v���M��PȔ؞w��T����"#��Ie��$�����n�tIj~h��T�P�����Ƒ��y��]�#�ۯ�#���P��!�r��b���z�9]�Ξ��$�3-u�92j�L�}D�_I�r��Nh+����`�6л���J�s �JQ�7�F#b<&�c��SrA�N����QR���%�] ��(��諷�/�o�Nƨ��!�Z�܈꭯����v�6���C�`�ŵ��5"��n�귌�-���t� ��k
��ܞ��0Z�Ś��4��&H��V����k�s���7�����4�,$�i#�Ͷ�#��4f�\-�Tf�$�b����[Ũ5�zɲ\��N�\�2Q�8���m�����q�c[�r�D��s �Ka�α1��q��,(�:@ҤZ��Ʊ�*_s��a�I��%��I�DC�n[�Nwf<4y��++Co�	�F���5���b�7�5{�R�f�$��S�P��?���̎�4Ŀ��(�L��q���wf�{տ��fϨ��Y���IN)� I���
xh���	��Ͼ�|(ƃ^��z��Ůk�#�|==�\O���OC|t������+T�Nc��v�$����'��Э܉`B�z3$M)\)gF'ҭ��*IӸ֟!i��R8j緎S(b�QO�P/3$a�)U�����ΐR+�i`��/�����oF�
��1��qo�e��c< .؝!i>�cu��-�w�ߕ4Ő:��ւ�8��;u�jE���I�s�܆$m&��Ց���k���S��S���{]�g.�>�F
BO$ם!i�P��a��P3]����Ϩ-q�$���b����[FSV��6�Ah����T�_�M[���|���!�A�dp
�mߴ��Qek�I������������[�fS�id�G� �� &:b���u����DO�D�]FdfH��*��A�U�v]c���)��I�	�K�5U�\�y��q��Z:@2��V��ud���[Vğ���I�$i��fH�Ndί�gN����(X��8���Pק
�c�-_
���q�&�z�!	��p���V����>��v`�dK,�A��W�0;�k
��gQ6?���Z�!Y�P��<f4��-g�(#95�!Y.F��6�{ƚ��������D�	���n9~��
�x"� Y������3r���>��!�Ra��ĩ�0Ư�^��GNJ�	�N	�![o89�:9����N����߫�gt�̭�20�	K�_�tFZ���6]�h��n3R��&)ן!����A'0ʞ����E�P<@�eT���̘�t�%:�:�3��&�$�� I��"�U����sD��(]�l�KB7H�TV���m��8]V����� �GgH�Zdk}s���m�2�hG��̐�4����>�G�@�]��g����|,��!���ƫ�j��Q!� ��«V�,`Ǚð?r�MBq_���u����q�G+s_\I�DZ�$�Ker��g-�Ơ�=$��� ���m��h�3o��>5F(I 	�m3�i�S{>0nF���F�a��L/�g�O3����8t��sV�(��|Lʔ�C$s�B���YK�m�MN"-�Ò�l�d��,���y�$̲�va?���4A2υ�/�W͘��gJ;J$�R@1�d��v�WT�o�$�G�O9~ΜQ~'���bM.�����j�����ܭ3�Lb���Wx�z��K+��^�B�t�Ƚ��e�w~�st�a��&&%]�	��	���Ϊ�lU2�&6%�� IW
h��f�k����;��N�O�%R���q�d�
HZ�:�ӷ2
όt�.���}u>�&o��}7���_G�C�*����d�C���͙��ֹYb��h��w_ m5���j�h��� c��x�6����U����\e>eI��UH��Tq:r�1N�Xq��ԓ�ܭ I_�����k�����zMQ~�j�]*6���f3C�'��ʠ��j��.��R<Ry���� I_��L*v_U_m;N�Ƽ&)ƽFv)�/��G� I_�O�j���wŘ�_��^�}h���4l���0���[�S�ٕ�DJBH��ee����c���Φ/��Q��<�T4 @R)(_����y%
�.�*��/��8/&+�3/���;��#� ��p%��'��฻J�xAWN�l�!���[����Y�U����c]���3�" �`	*᭖kK}WG'��D[B�H��K/y�3���gYP�� I�SQf�;r�@-WV��#�c��_�<��������"q�$8A �sIF0Qڊ��̮r�A�\�������SǝXB�])���`O��΢)u��yU����}�7@�{�*K}���ɩ
o]+JHˁP��\u���s�k�7�r�'�]����	x�z{���-�|U��u��n�K����4�v��m��{�\#�\RR� I_:�Y�չg�����\������ޡs�j�(��W|�2�Tm�d�=�L�ݵ#��]�ZS��Ⱥ˕�#k/�y�VB��Y<5A�Ia�%^��5�f�,):�F���!Y�F{������7�tv�n�3��)@�,���O�w��݉&l�h�x:@�t���:�H�}M��:��x���h$K��\�ʘ�Ы.���52� �o���q��z�ۜYm�������S͉� 鯑���6ku���X�)q$}�T-�ow6������Ks�������[�Z�7��kյ���Z�����Däp	�,gH�B1��P�qv
\b�%Ԡ�A1� 0t��Y.�_�3��ߍ�N5�XE2� 0���/�����"�5��L2���I��Wsj�C��4�[Q?�/'��+v��Z�C�ǡ�,hS�k�a��|yI5P���
��:t���5Ɋ��,�2q�:$��`�/�m��g�:��^^q�o��OD�H���~168Wz�7���F��!�A��K�ɉ���/\i2q�d��׈^N�Չ��2k���GAd#gH�K޺�w�P���Xṃ����Ј���?8��u�:�Aվΐ��8��;��b��o��?%�ez�@2p9�_'ΜaY�D�]�}{�3#|���n��_���ZW�����[�I�mV�]����r��<�9�
q$ ��3i���($�K42"15C�g+�=U׿X�^�5Y��>�3$}���9�j9�\����EӒ��¸���y�D��vH�O�'�09E\�!��g3�:�V#ٟ�a�4Ӊ!Z����e Y��E֞��]����4~;����|�@�Dߪ���m3��5^@��ӆV�]ulΌ�M��&��}0q���S��0q�"�����ܰvZz����k�1)���*<=�����/4J�#^�s�s�N���tR���d��b�b�$"����m�}��=�A$����T�mxn`���amT�46">COp8B%��{�Wm��FN�y������0���
L0�k�Φ�}6)�Ѧ����C����瞙��0;x�T�q�3C�������$�5+�dћ6D��@��m��S��v-OC��O�pm����$Q�s�nH���Y����1q��Z*�+�a܇ψG�&��'x�=k/��[�=��\���/ ��v b  Ӫo���+j-�$Or7RgH��M֋zd�@��>	M�x����MhHP�Or��;΀qq�g'�'����!0��,|8�8�Y/j5ђ(�_@ 
U	�'�FU��ULWf��E|�g�+��'S�9E���ʥ��JrB��w׬�d	�X����&ci��I/ ��ٱ��'�K'���^�a����Pg`���5��2�(��[D{
. Є��c5��Y���T���0��	XB����Y�(�v���s�����A��n_ל=po�
K��@�HB���{[U��=$ܚ�APqIA!f,����:��oMp��(��5n��hB���o��g�rO#���
+ڀl�$t�b[�6wwE�Q-&�@�ؗ\@ 	u���3?O���Nl��y�'���m��u[Ί�U��q/9��.2��n���CIb��v��՜OR�y}�q��fg��ڙ����:��w�S�)�]����uυ�+I��P�`:|4'�rf��J�|;��H�:\�>N-���ʕ<s���O�Ip����,_t��|�Ws+M�- LzS�Ǐ�Չ,�
u� mb��E�\����c}�\�r]R��.8B��Wu<�4����ˤ���^@���Pb'�'W����N�<~���R8u�4C�:t8��Ϲ�>�8����O&�w|a���� �p�*���=�h��e�#T.x�o̗��[����[C
&O���C�[�<����M�|��{�2mJp(!Kl� I��c�SW~���w^�~���!�*���a��կ3�Se��rSeRt'削�mG-<���d��:]�Ņ���@�x��͇9��:}M�x���a�P[(@��~������2R��k�&�^-A�9������e��bRo]]�~k_]�21��3C�����Y��X����ՆX�6�6�Ѧ�4�n���T��gz�[��>�V�"������W�0Z�:}Mu�jQJMk�ڸ>�!���nZe��4:}�>�Nے�}_��SHj�
?��x��猼����T��^ǈ^Y^@�]��ˎ�o�r,�= p�.�>�����'���EE3��҄0��^@�	��æ��yS���^��HI�"������3���gŠVߜ�X��{��h��Eh[���}��;Ve�^㕇q/��E��K��!��_`8����{C��8�a܋K��f/��W���;e�b�������"���{L���hѴ�K`�	��^�V/2��>��Jr"$:C�9`�~h�;�`�V�^����]Eo�. �5���<��������o����&��$��v����`�x�v� e�,ɣus����Դ��ɩ$�k�+�q�=OL׎3���(��7]?t-�6�w��z:�[�3��� �c�js�Z�岣��H��!p��n36m[��Z�H��eh=:s���n�3����ޚ�uu��!�<=S&��Sn8B�^n�G�~w#�"i�J�ǝf4�mAu��zlu�=4G�'[���l��'`p�{�ӝ9��[�)d���O&t��Im�At"ə��/z�<��h�>A�<@�9�.f���[�L�6w���+�?�X��~�&�.�����Ĺ��"�L�o�QFo. P�z�M�����m^�4�o�C�ψ����C�b��5�̟�>��?��y�@:D�b���6���Q���l\��HB=��p�a��F ��+�/��_�[@ 	���W��ά�t$��_E��, ��z�}3b��#mִ෾_E�K- ��á�6{΋���:�[Dd�'����g���P��Z���Qm��-_��}�+ ��c 	��S?��"=��$��~P`�xhZH �[a�>��j�+q�3C��om3����}~C��*yE}� �#�x·��j�o��o�"�	S`�@�D��f�΢oϓЛ�j����z��
e��
��O���6>�l�Eh�l��W��"��=���=��W��KhB̀��|�fY�c��6l,�)Tvu����A���I�?���. �3�0mϻ���=���
O�k������4�����8x�wMCr̓4zz8Bۀ���Se?���2��R�L�$��H)��4g<     