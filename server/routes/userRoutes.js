import express from 'express';
import upload from '../middleware/multerMiddleware.js';
import { registerUser, loginUser, forgotPassword, getUsersByType, toggleApprovalStatus, denyLandlord } from '../controllers/userController.js';
import { getUserProfileById, updateUserProfile } from '../controllers/LandlordProfileController.js';
import { addProperty, getPropertiesByUser, getPropertyById, updateProperty, deleteProperty } from '../controllers/landlordAddProperty.js';
import { getUserProfile, updateTenantUserProfile } from '../controllers/tenantProfileController.js';
const router = express.Router();

router.post('/register',  upload.single('file'), registerUser);
router.post('/login', loginUser );
router.post('/forgot', forgotPassword);
router.get('/', getUsersByType);
// Admin
router.delete('/deny/:landlordId', denyLandlord);
// Route to toggle approval status
router.put('/approve/:landlordId', toggleApprovalStatus);

//Landlord
router.get('/profile/:id', getUserProfileById);  
router.put('/profile/update/:id', updateUserProfile);  
router.post('/add-property/:id',  addProperty); 
router.get('/landlord-property/:id',  getPropertiesByUser); 
router.get('/property/:id',  getPropertyById);
router.put('/update-property/:id',  updateProperty); 
router.delete('/delete-property/:id',  deleteProperty);

//Tenanat 
router.get('/profile/:id', getUserProfile);
router.put('/profile/update/:id', updateTenantUserProfile);

export default router;
