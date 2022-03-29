const Router=require("express")
const router=new Router
const brandController=require("../controllers/brandController")
const checkRole=require('../middleware/chekRoleMiddleware')



router.post("/",checkRole("ADMIN"), brandController.create)
router.get("/",brandController.getAll)
router.delete('/:id',checkRole("ADMIN"),brandController.delete)
router.put('/:id',checkRole("ADMIN"),brandController.update)


module.exports=router