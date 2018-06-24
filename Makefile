upload:
	aws s3 sync --exclude ".git/*"  --acl "public-read" . s3://cnd-avatars 