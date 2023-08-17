from dns import resolver

def validateEmail(email):
    try:
        domain = email.split('@')[1]
        records = resolver.query(domain, 'MX')
        mxRecord = records[0].exchange
        mxRecord = str(mxRecord)
        return mxRecord
    except:
        return False