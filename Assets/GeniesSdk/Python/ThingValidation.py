import logging
import bpy
import io
from genies.validation.fbx_validator import FbxValidator
from genies.validation.texture_validator import TextureValidator


def ValidateThingFbx(path_string, asset_name):
    # Clear blender scene
    clear_bpy_scene()
    
    logger, _, string_io_handler = configure_logger()
    validator= FbxValidator(logger, asset_name, path_string)
    result= validator.validate()

    # Clear blender scene
    clear_bpy_scene()
    
    return result, validator.errors

def ValidateThingTexture(path_string, asset_name):
    logger, _, string_io_handler = configure_logger()
    validator= TextureValidator(logger, asset_name, path_string)
    result= validator.validate()
    return result, validator.errors

def clear_bpy_scene():
    # Delete all boilerplate objects in the scene
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)
    bpy.ops.outliner.orphans_purge()

def configure_logger():
    logger = logging.getLogger("validation_logger")
    logger.setLevel(logging.INFO)

    formatter = logging.Formatter('[%(levelname)s] >%(filename)s: %(message)s')

    # For console output
    console_handler = logging.StreamHandler()
    console_handler.setFormatter(formatter)
    logger.addHandler(console_handler)

    # String IO for emails
    string_io_handler = logging.StreamHandler()
    string_io_handler.setFormatter(formatter)
    string_io_handler.stream = io.StringIO()
    logger.addHandler(string_io_handler)

    return logger, console_handler, string_io_handler