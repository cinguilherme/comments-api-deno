
CREATE TABLE IF NOT EXISTS comments (
    id int(11) NOT NULL AUTO_INCREMENT,
    post int(11) NOT NULL,
    content text NOT NULL,
    slug varchar(255) NOT NULL UNIQUE,
    link varchar(255),
    likes int DEFAULT 0,
    dislikes int DEFAULT 0,
    tags varchar(255),
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;