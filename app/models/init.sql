CREATE TABLE IF NOT EXISTS public.User (
        id SERIAL NOT NULL,
		username text,
		email text ,
        password text ,
        accountType text,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id)) ;

CREATE TABLE IF NOT EXISTS public.Links (
        id SERIAL NOT NULL,
		userID SERIAL NOT NULL,
		title text ,
        urlId text ,
        link text,
		shortenLink text,
		status text,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.privacyPolicys (
        id SERIAL,
        title text NOT NULL,
        content text,
        createdAt timestamp NOT NULL,
        updatedAt timestamp ,
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.TermsConditions (
        id SERIAL,
        title text NOT NULL,
        content text,
        createdAt timestamp NOT NULL,
        updatedAt timestamp ,
        PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.otp (
            id SERIAL,
            email text,
            otp text,
            status text,
            createdAt timestamp NOT NULL,
            updatedAt timestamp ,
            PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.QRCode (
			id SERIAL NOT NULL,
			userID SERIAL NOT NULL,
			title text ,
			urlId text ,
			link text,
			shortenLink text,
			color text,
			status text,
			createdAt timestamp,
			updatedAt timestamp ,
			PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS public.Url (
        id SERIAL NOT NULL,
        urlId text ,
        origUrl text,
        shortUrl text ,
        clicks text,
        date text,
        createdAt timestamp,
        updatedAt timestamp ,
        PRIMARY KEY (id));

